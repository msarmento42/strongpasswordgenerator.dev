import json, re
from pathlib import Path
import requests
from wordfreq import top_n_list

BANLIST_URLS = [
    'https://raw.githubusercontent.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/master/en',
    'https://raw.githubusercontent.com/RobertJGabriel/Google-profanity-words/master/list.txt',
]

MIN_LEN = 3
MAX_LEN = 12
TARGET_SIZE = 70000

def build_banlist():
    ban = set()
    for url in BANLIST_URLS:
        try:
            r = requests.get(url, timeout=30)
            r.raise_for_status()
            for line in r.text.splitlines():
                w = line.strip().lower()
                if w and not w.startswith('#'):
                    ban.add(w)
        except Exception as e:
            print('Banlist fetch failed:', url, e)
    return ban

def main():
    ban = build_banlist()
    raw = top_n_list('en', n_top=120000)
    out, seen = [], set()
    import re
    pat = re.compile(r'^[a-z]+$')
    for w in raw:
        w = w.lower()
        if w in seen: continue
        if not (MIN_LEN <= len(w) <= MAX_LEN): continue
        if not pat.match(w): continue
        if w in ban: continue
        seen.add(w); out.append(w)
        if len(out) >= TARGET_SIZE: break
    Path('wordlist.json').write_text(json.dumps(out, ensure_ascii=False))
    print('Selected', len(out), 'words -> wordlist.json')

if __name__ == '__main__':
    main()
