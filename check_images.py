import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

matches = re.findall(r'<img\s+[^>]*src=[\'\"]([^\'\"]+)[\'\"]', text)
for m in matches:
    if 'assets/images' in m:
        print(m)
