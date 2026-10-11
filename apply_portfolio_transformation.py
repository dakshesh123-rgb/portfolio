import re
import os

PORTFOLIO_DIR = '/root/portfolio'

def replace_in_file(path, replacements):
    if not os.path.exists(path):
        return
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    modified = content
    for old, new in replacements:
        modified = modified.replace(old, new)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(modified)
    print(f"Applied replacements to {path}")

# =========================================================================
# 1. Update 2l20o-mx4lc7r.js (Home Cards Data)
# =========================================================================
js_cards_path = os.path.join(PORTFOLIO_DIR, '_next/static/immutable/chunks/2l20o-mx4lc7r.js')
if os.path.exists(js_cards_path):
    with open(js_cards_path, 'r', encoding='utf-8', errors='ignore') as f:
        js_content = f.read()

    old_cards_match = re.search(r'\[\"cardsList\",0,(\[\{name:\"Razed Mods\".*?id:\"case-the-luxe-week-image\"[^\}]*\}\])\]', js_content)
    if old_cards_match:
        new_cards_list = (
            '[{name:"Quantum Tunneling",year:"2026’",shortYear:"‘26",uri:"https://dakshesh123-rgb.github.io/qm-project-website/",src:"/img/project-cards/quantum-tunneling.webp",mobileSrc:"/img/project-cards/quantum-tunneling-mobile.webp",srcCrop:{left:0,top:.2,width:1,height:.6},aspectRatio:"3840 / 2160",id:"case-qm-image"},'
            '{name:"EGFR Oncology",year:"2026’",shortYear:"‘26",uri:"/all-works",src:"/img/project-cards/cancer-docking.webp",mobileSrc:"/img/project-cards/cancer-docking-mobile.webp",srcCrop:{left:0,top:.2,width:1,height:.6},aspectRatio:"3840 / 2160",id:"case-cancer-image"},'
            '{name:"StatArb Engine",year:"2026’",shortYear:"‘26",uri:"https://github.com/dakshesh123-rgb/pure-python-statarb",src:"/img/project-cards/statarb-engine.webp",mobileSrc:"/img/project-cards/statarb-engine-mobile.webp",srcCrop:{left:0,top:.2,width:1,height:.6},aspectRatio:"3840 / 2160",id:"case-statarb-image"},'
            '{name:"RF-Vision Radar",shortName:"RF-VISION",year:"2026’",shortYear:"‘26",uri:"/all-works",src:"/img/project-cards/rf-vision.webp",mobileSrc:"/img/project-cards/rf-vision-mobile.webp",srcCrop:{left:0,top:.2,width:1,height:.6},aspectRatio:"3840 / 2160",id:"case-rf-image"},'
            '{name:"AuraFauna",year:"2025’",shortYear:"‘25",uri:"/all-works",src:"/img/project-cards/aurafauna.webp",mobileSrc:"/img/project-cards/aurafauna-mobile.webp",srcCrop:{left:0,top:.2,width:1,height:.6},aspectRatio:"3840 / 2160",id:"case-aurafauna-image"},'
            '{name:"HexStrike AI",year:"2024’",shortYear:"‘24",uri:"https://github.com/0x4m4/hexstrike-ai",src:"/img/project-cards/hexstrike-ai.webp",mobileSrc:"/img/project-cards/hexstrike-ai-mobile.webp",srcCrop:{left:0,top:.2,width:1,height:.6},aspectRatio:"3840 / 2160",id:"case-hexstrike-image"}]'
        )
        js_content = js_content[:old_cards_match.start(1)] + new_cards_list + js_content[old_cards_match.end(1):]
        with open(js_cards_path, 'w', encoding='utf-8') as f:
            f.write(js_content)
        print("Updated cardsList in 2l20o chunk!")

# =========================================================================
# 2. Update index.html (Homepage HTML & Pre-rendered Cards)
# =========================================================================
index_path = os.path.join(PORTFOLIO_DIR, 'index.html')
replacements_index = [
    ('ARIAN ATMAR ©', 'DAKSHESH DAS ©'),
    ('Arian Atmar — Award-Winning Designer', 'Dakshesh Das — Computational Physicist & Systems Builder'),
    ('Arian Atmar — award-winning UI/UX designer', 'Dakshesh Das — Computational Physicist & Systems Builder'),
    ('Design With Arian Website Portfolio', 'Computational Physics, First-Principles Simulations & Systems by Dakshesh Das'),
    ('Specializing in ui/ux &amp; web design', 'Specializing in computational physics &amp; first-principles systems'),
    ('Specializing in ui/ux & web design', 'Specializing in computational physics & first-principles systems'),
    ('hello@arianatmar.com', 'https://github.com/dakshesh123-rgb'),
    ('Razed Mods preview', 'Quantum Tunneling preview'),
    ('Razed Mods', 'Quantum Tunneling'),
    ('/img/project-cards/razed-mods.webp', '/img/project-cards/quantum-tunneling.webp'),
    ('/img/project-cards/razed-mods-mobile.webp', '/img/project-cards/quantum-tunneling-mobile.webp'),
    ('SŌM Power preview', 'EGFR Oncology preview'),
    ('SŌM Power', 'EGFR Oncology'),
    ('/img/project-cards/som-power.webp', '/img/project-cards/cancer-docking.webp'),
    ('/img/project-cards/som-power-mobile.webp', '/img/project-cards/cancer-docking-mobile.webp'),
    ('SŌM preview', 'StatArb Engine preview'),
    ('SŌM', 'StatArb Engine'),
    ('/img/project-cards/som.webp', '/img/project-cards/statarb-engine.webp'),
    ('/img/project-cards/som-mobile.webp', '/img/project-cards/statarb-engine-mobile.webp'),
    ('The Performance Lab preview', 'RF-Vision Radar preview'),
    ('TPL', 'RF-Vision'),
    ('/img/project-cards/the-performance-lab.webp', '/img/project-cards/rf-vision.webp'),
    ('/img/project-cards/the-performance-lab-mobile.webp', '/img/project-cards/rf-vision-mobile.webp'),
    ('Kanoi preview', 'AuraFauna preview'),
    ('Kanoi', 'AuraFauna'),
    ('/img/project-cards/kanoi.webp', '/img/project-cards/aurafauna.webp'),
    ('/img/project-cards/kanoi-mobile.webp', '/img/project-cards/aurafauna-mobile.webp'),
    ('The Luxe Week preview', 'HexStrike AI preview'),
    ('The Luxe Week', 'HexStrike AI'),
    ('/img/project-cards/the-luxe-week.webp', '/img/project-cards/hexstrike-ai.webp'),
    ('/img/project-cards/the-luxe-week-mobile.webp', '/img/project-cards/hexstrike-ai-mobile.webp'),
]
replace_in_file(index_path, replacements_index)

# =========================================================================
# 3. Update all-works.html and 2499hl8wsoam5.js
# =========================================================================
all_works_path = os.path.join(PORTFOLIO_DIR, 'all-works.html')
replacements_all_works = [
    ('ARIAN ATMAR ©', 'DAKSHESH DAS ©'),
    ('Arian Atmar — Award-Winning Designer', 'Dakshesh Das — Selected Works & Systems Archive'),
    ('Arian Atmar — award-winning UI/UX designer', 'Dakshesh Das — Computational Physicist & Systems Builder'),
    ('Design With Arian Website Portfolio', 'Complete archive of computational physics simulations, algorithmic finance, and distributed systems by Dakshesh Das.'),
    ('Specializing in ui/ux &amp; web design', 'Specializing in computational physics &amp; first-principles systems'),
    ('Specializing in ui/ux & web design', 'Specializing in computational physics & first-principles systems'),
    ('hello@arianatmar.com', 'https://github.com/dakshesh123-rgb'),
    ('Razed Mods', 'Quantum Tunneling Dynamics'),
    ('SŌM Power', 'In-Silico EGFR Drug Discovery'),
    ('The Performance Lab', 'Zero-Dependency StatArb Engine'),
    ('The Luxe Week', 'RF-Vision WiFi CSI Radar'),
]
replace_in_file(all_works_path, replacements_all_works)

# =========================================================================
# 4. Update about.html
# =========================================================================
about_path = os.path.join(PORTFOLIO_DIR, 'about.html')
replacements_about = [
    ('ARIAN ATMAR ©', 'DAKSHESH DAS ©'),
    ('Arian Atmar — Award-Winning Designer', 'About Dakshesh Das — Computational Physicist & Builder'),
    ('Arian Atmar — award-winning UI/UX designer', 'Dakshesh Das — Computational Physicist & Systems Builder'),
    ('Specializing in ui/ux &amp; web design', 'Specializing in computational physics &amp; first-principles systems'),
    ('Specializing in ui/ux & web design', 'Specializing in computational physics & first-principles systems'),
    ('hello@arianatmar.com', 'https://github.com/dakshesh123-rgb'),
    ('My name is<!-- --> <span class="font--italic color--red" style="position:relative;left:-0.2rem">A</span><span class="color--red">rian</span> <span class="font--italic color--red">Atmar</span>',
     'My name is<!-- --> <span class="font--italic color--red" style="position:relative;left:-0.2rem">D</span><span class="color--red">akshesh</span> <span class="font--italic color--red">Das</span>'),
    ('Good design doesn&#x27;t start in Figma<!-- --> <span class="color--gray">(software for design)</span>.<br/>It starts way before that.',
     'High-level engineering doesn&#x27;t start in black-box libraries.<br/>It starts in fundamental differential equations and first principles.'),
]
replace_in_file(about_path, replacements_about)

# =========================================================================
# 5. Global Brand Name Replacements in all JS chunks
# =========================================================================
for root, dirs, files in os.walk(os.path.join(PORTFOLIO_DIR, '_next')):
    for f in files:
        if f.endswith('.js'):
            p = os.path.join(root, f)
            replace_in_file(p, [
                ('ARIAN ATMAR ©', 'DAKSHESH DAS ©'),
                ('Arian Atmar', 'Dakshesh Das'),
                ('hello@arianatmar.com', 'https://github.com/dakshesh123-rgb'),
            ])

print("Portfolio transformation complete!")
