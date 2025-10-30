import json, re
from pathlib import Path
import requests
from wordfreq import top_n_list

# Try both main and master for each list (repos change defaults)
BANLIST_CANDIDATES = [
    # LDNOOBW
    "https://raw.githubusercontent.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/main/en",
    "https://raw.githubusercontent.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/master/en",
    # RobertJGabriel
    "https://raw.githubusercontent.com/RobertJGabriel/Google-profanity-words/main/list.txt",
    "https://raw.githubusercontent.com/RobertJGabriel/Google-profanity-words/master/list.txt",
]

MIN_LEN = 3
MAX_LEN = 12
TARGET_SIZE = 70000

def fetch_text(url: str) -> str | None:
    try:
        r = requests.get(url, timeout=30, headers={"User-Agent": "wordlist-builder/1.0"})
        r.raise_for_status()
        return r.text
    except Exception as e:
        print("Banlist fetch failed:", url, e)
        return None

def build_banlist() -> set[str]:
    ban: set[str] = set()
    for url in BANLIST_CANDIDATES:
        txt = fetch_text(url)
        if not txt:
            continue
        for line in txt.splitlines():
            w = line.strip().lower()
            if w and not w.startswith("#"):
                ban.add(w)
    return ban

def main():
    ban = build_banlist()
    # Use positional arg (not keyword) for top_n_list
    raw = top_n_list("en", 120000)
    out, seen = [], set()
    pat = re.compile(r"^[a-z]+$")

    for w in raw:
        w = w.lower()
        if w in seen:
            continue
        if not (MIN_LEN <= len(w) <= MAX_LEN):
            continue
        if not pat.match(w):
            continue
        if w in ban:
            continue
        seen.add(w)
        out.append(w)
        if len(out) >= TARGET_SIZE:
            break

    Path("wordlist.json").write_text(json.dumps(out, ensure_ascii=False))
    print("Selected", len(out), "words -> wordlist.json")

if __name__ == "__main__":
    main()
