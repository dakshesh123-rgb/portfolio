#!/usr/bin/env python3
"""
Custom local server for the exact Arian Atmar portfolio clone.
Supports clean URLs (/about, /all-works) and direct image decoding.
"""

import http.server
import socketserver
import os
import urllib.parse
import mimetypes

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

mimetypes.add_type('image/webp', '.webp')
mimetypes.add_type('font/woff2', '.woff2')
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')

class CleanHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        # Handle Next.js image optimizer requests
        if path.startswith('/_next/image'):
            query = urllib.parse.parse_qs(parsed.query)
            if 'url' in query and len(query['url']) > 0:
                raw_url = urllib.parse.unquote(query['url'][0])
                if raw_url.startswith('/'):
                    self.path = raw_url
                else:
                    self.path = '/' + raw_url
                return super().do_GET()

        # Handle clean URLs
        if path == '/' or path == '':
            self.path = '/index.html'
        elif path == '/about' or path == '/about/':
            self.path = '/about.html'
        elif path == '/all-works' or path == '/all-works/':
            self.path = '/all-works.html'

        return super().do_GET()

if __name__ == '__main__':
    port = int(os.environ.get('PORT', PORT))
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(('0.0.0.0', port), CleanHandler) as httpd:
        print(f"🚀 Portfolio clone running at http://localhost:{port}")
        print(f"   Root directory: {DIRECTORY}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
