import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

matches = set(re.findall(r'url\([\'\"]?([^\'\")]+)[\'\"]?\)', text))
for m in matches:
    print(m)
