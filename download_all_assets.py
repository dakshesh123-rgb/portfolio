import urllib.request
import urllib.parse
import re
import os
import sys

BASE = 'https://www.arianatmar.com'
TARGET_DIR = '/root/portfolio'
os.makedirs(TARGET_DIR, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

downloaded = set()
queue = set()

def normalize_rel_path(p):
    p = p.split('?')[0].split('#')[0]
    if p.startswith('http'):
        parsed = urllib.parse.urlparse(p)
        if parsed.netloc == 'www.arianatmar.com' or parsed.netloc == 'arianatmar.com':
            p = parsed.path
        else:
            return None
    if not p.startswith('/'):
        p = '/' + p
    return p

def download_one(rel_path):
    rel_clean = normalize_rel_path(rel_path)
    if not rel_clean or rel_clean in downloaded:
        return None

    downloaded.add(rel_clean)
    url = BASE + rel_clean
    local_path = os.path.join(TARGET_DIR, rel_clean[1:])
    os.makedirs(os.path.dirname(local_path), exist_ok=True)

    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            content = resp.read()
            with open(local_path, 'wb') as f:
                f.write(content)
        print(f"Downloaded [{resp.status}]: {rel_clean} ({len(content)} bytes)")
        return content, rel_clean
    except Exception as e:
        print(f"Error {rel_clean}: {e}")
        return None, None

# 1. Start with initial HTML pages
pages = ['/index.html', '/about.html', '/all-works.html']
for p in pages:
    fpath = os.path.join(TARGET_DIR, p[1:])
    if os.path.exists(fpath):
        with open(fpath, 'r', errors='ignore') as f:
            html = f.read()
            # extract all assets
            for m in re.findall(r'(?:href|src)=\"(/_next/[^\"]+)\"', html):
                queue.add(normalize_rel_path(m))
            for m in re.findall(r'\"(/_next/static/[^\"]+)\"', html):
                queue.add(normalize_rel_path(m))
            for m in re.findall(r'\"(/img/[^\"]+)\"', html):
                queue.add(normalize_rel_path(m))
            for m in re.findall(r'url=([^&\"\'\s]+)', html):
                decoded = urllib.parse.unquote(m)
                if decoded.startswith('/'):
                    queue.add(normalize_rel_path(decoded))

# Common images & favicons
queue.add('/favicon.ico')
queue.add('/og-preview.jpg')
queue.add('/og-preview-square.jpg')

# Direct project card images
project_cards = [
    '/img/project-cards/razed-mods.webp',
    '/img/project-cards/som-power.webp',
    '/img/project-cards/som.webp',
    '/img/project-cards/the-performance-lab.webp',
    '/img/project-cards/kanoi.webp',
    '/img/project-cards/the-luxe-week.webp',
    '/img/project-cards/the-luxe-week-mobile.webp'
]
for pc in project_cards:
    queue.add(pc)

# Process queue iteratively
while queue:
    current = queue.pop()
    if not current or current in downloaded:
        continue
    content, path = download_one(current)
    if content and path:
        # If CSS file, parse url(...)
        if path.endswith('.css'):
            text = content.decode('utf-8', errors='ignore')
            urls = re.findall(r'url\([\'\"]?([^\'\"\)]+)[\'\"]?\)', text)
            for u in urls:
                if u.startswith('data:'):
                    continue
                # Resolve relative to css file path
                css_dir = os.path.dirname(path)
                resolved = urllib.parse.urljoin('/' + css_dir + '/', u)
                norm = normalize_rel_path(resolved)
                if norm and norm not in downloaded:
                    queue.add(norm)
        # If JS file, parse additional chunks or media
        elif path.endswith('.js'):
            text = content.decode('utf-8', errors='ignore')
            chunks = re.findall(r'\"(/_next/static/immutable/[^\"]+)\"', text)
            for c in chunks:
                norm = normalize_rel_path(c)
                if norm and norm not in downloaded:
                    queue.add(norm)
            media = re.findall(r'\"(/img/[^\"]+)\"', text)
            for m in media:
                norm = normalize_rel_path(m)
                if norm and norm not in downloaded:
                    queue.add(norm)

print(f"Cloning complete! Total assets downloaded: {len(downloaded)}")
