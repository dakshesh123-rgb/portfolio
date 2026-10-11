import os

PORTFOLIO_DIR = '/root/portfolio'

def replace_in_files(replacements, target_files):
    for fpath in target_files:
        if not os.path.exists(fpath):
            continue
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        modified = content
        for old, new in replacements:
            modified = modified.replace(old, new)
            
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(modified)
        print(f"Updated: {fpath}")

replacements = [
    ('SENIOR UI/UX DESIGNER', 'COMPUTATIONAL RESEARCHER'),
    ('UI/UX &amp; Web Designer', 'Computational Physicist &amp; Systems Builder'),
    ('UI/UX & Web Designer', 'Computational Physicist & Systems Builder'),
    ('Art Direction, UI/UX Design, Development', 'Quantum Mechanics, Biophysics, Algorithmic Finance'),
    ('An Award-Winning Senior UI/UX Designer working with studios around the World.', 'A Computational Physicist & Systems Engineer building first-principles simulations.'),
    ('Germany / Frankfurt am Main', 'First-Principles Computational Lab'),
    ('Arian Atmar pumped and cool', 'Dakshesh Das In Lab'),
    ('Arian', 'Dakshesh'),
    ('Atmar', 'Das'),
    ('arianatmar.com', 'dakshesh123-rgb.github.io'),
    ('arianatmar', 'dakshesh123-rgb'),
    ('hello@arianatmar.com', 'https://github.com/dakshesh123-rgb'),
    ('Senior UI/UX Designer', 'Computational Physicist & Systems Builder'),
]

# Targets: all HTML and JS files in portfolio
targets = []
for root, dirs, files in os.walk(PORTFOLIO_DIR):
    for f in files:
        if f.endswith('.html') or f.endswith('.js'):
            targets.append(os.path.join(root, f))

replace_in_files(replacements, targets)
print("Updated all about & archive records successfully!")
