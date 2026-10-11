import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

TARGET_DIR = '/root/portfolio/img/project-cards'
os.makedirs(TARGET_DIR, exist_ok=True)

# Sources
sources = {
    'quantum-tunneling': '/root/portfolio/assets/qm_wavepacket.png',
    'cancer-docking': '/root/portfolio/assets/cancer_covalent_kinetics.png',
    'statarb-engine': '/root/portfolio/assets/qm_shape_factor.png',
    'rf-vision': '/root/portfolio/assets/qm_resonant_tunneling.png',
    'aurafauna': '/root/portfolio/assets/aurafauna_mockup.jpg',
    'hexstrike-ai': '/root/portfolio/assets/hexstrike_logo.png'
}

def create_card(name, src_path, width=3840, height=2160):
    img = Image.new('RGB', (width, height), color=(8, 10, 16))
    
    if os.path.exists(src_path):
        src_img = Image.open(src_path).convert('RGBA')
        # Scale to fit nicely with padding and high contrast
        scale = min((width * 0.85) / src_img.width, (height * 0.85) / src_img.height)
        new_w = int(src_img.width * scale)
        new_h = int(src_img.height * scale)
        src_resized = src_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # Center on dark background
        pos_x = (width - new_w) // 2
        pos_y = (height - new_h) // 2
        
        # Glow / shadow behind
        shadow = Image.new('RGBA', (new_w + 80, new_h + 80), (0, 0, 0, 180))
        img.paste((12, 14, 22), (0, 0, width, height))
        img.paste(src_resized, (pos_x, pos_y), src_resized)
    
    # Save standard & mobile
    desktop_path = os.path.join(TARGET_DIR, f"{name}.webp")
    mobile_path = os.path.join(TARGET_DIR, f"{name}-mobile.webp")
    
    img.save(desktop_path, 'WEBP', quality=88)
    
    # Mobile aspect ratio (portrait-leaning or compact)
    mobile_img = img.resize((1440, 1920), Image.Resampling.LANCZOS)
    mobile_img.save(mobile_path, 'WEBP', quality=85)
    print(f"Generated card images for {name} -> {desktop_path}, {mobile_path}")

for name, src in sources.items():
    create_card(name, src)

print("All card images generated successfully!")
