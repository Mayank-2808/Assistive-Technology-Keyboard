import difflib
import os

current_dir = os.path.dirname(os.path.abspath(__file__))
words_file = os.path.join(current_dir, "..", "..", "words.txt")

with open(words_file, "r", encoding="utf-8") as f:
    DICTIONARY = [line.strip() for line in f if line.strip()]

def get_suggestions(prefix, limit=5):
    """
    Return up to 'limit' suggestions that either:
      1) Start with 'prefix' (case-insensitive),
      2) If no prefix matches, fall back to approximate matches via difflib.
    """
    prefix = prefix.lower().strip()
    if not prefix:
        return sorted(DICTIONARY)[:limit]

    # First pass: direct prefix match
    direct_matches = [w for w in DICTIONARY if w.startswith(prefix)]
    if direct_matches:
        return sorted(direct_matches)[:limit]

    # Fallback: approximate matches
    close_matches = difflib.get_close_matches(prefix, DICTIONARY, n=limit, cutoff=0.6)
    return close_matches