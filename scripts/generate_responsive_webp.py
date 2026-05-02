from PIL import Image
import os

SRC_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'assets')
OUT_DIR = os.path.join(SRC_DIR, 'responsive')
os.makedirs(OUT_DIR, exist_ok=True)

sizes = [400, 800, 1200, 1600]

def convert(path):
    name = os.path.splitext(os.path.basename(path))[0]
    try:
        im = Image.open(path)
    except Exception as e:
        print('SKIP', path, e)
        return
    for w in sizes:
        ratio = w / im.width
        h = max(1, int(im.height * ratio))
        out_path = os.path.join(OUT_DIR, f"{name}-{w}.webp")
        resized = im.resize((w, h), Image.LANCZOS)
        resized.save(out_path, 'WEBP', quality=80, method=6)
        print(path, '->', out_path)

if __name__ == '__main__':
    for fname in os.listdir(SRC_DIR):
        if fname.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')) and fname != 'responsive':
            full = os.path.join(SRC_DIR, fname)
            convert(full)
