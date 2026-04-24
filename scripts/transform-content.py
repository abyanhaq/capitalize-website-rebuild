import json
import re

with open("firecrawl-raw.json") as f:
    raw = json.load(f)

pages = []
seen_urls = set()

for item in raw.get("data", []):
    url = item.get("metadata", {}).get("url") or item.get("url", "")
    if not url or url in seen_urls:
        continue
    seen_urls.add(url)

    meta = item.get("metadata", {})
    md = item.get("markdown", "") or ""

    # --- headings ---
    headings = []
    seen_headings = set()
    for line in md.splitlines():
        m = re.match(r"^(#{1,6})\s+(.+)", line.strip())
        if m:
            level = "h" + str(len(m.group(1)))
            text = m.group(2).strip()
            if text and text not in seen_headings:
                seen_headings.add(text)
                headings.append({"level": level, "text": text})

    # --- body copy ---
    body_lines = []
    for line in md.splitlines():
        line = line.strip()
        if not line:
            continue
        if re.match(r"^#{1,6}\s", line):
            continue
        # strip markdown formatting
        line = re.sub(r"!\[.*?\]\(.*?\)", "", line)
        line = re.sub(r"\[([^\]]+)\]\([^\)]+\)", r"\1", line)
        line = re.sub(r"[*_`]{1,3}", "", line)
        line = line.strip("> |-").strip()
        if len(line) > 40:
            body_lines.append(line)

    # deduplicate
    seen_lines = set()
    body_copy = []
    for l in body_lines:
        if l not in seen_lines:
            seen_lines.add(l)
            body_copy.append(l)

    pages.append({
        "url": url,
        "title": meta.get("title", ""),
        "description": meta.get("description", ""),
        "og_title": meta.get("ogTitle", ""),
        "headings": headings,
        "body_copy": body_copy,
        "word_count": len(md.split()),
    })

# sort by URL length then alphabetically
pages.sort(key=lambda p: (len(p["url"]), p["url"]))

out = {
    "site": "Capitalize Analytics",
    "domain": "https://capitalizeconsulting.com",
    "crawled_at": "2026-04-23",
    "total_pages": len(pages),
    "pages": pages,
}

with open("site-content.json", "w") as f:
    json.dump(out, f, indent=2, ensure_ascii=False)

print(f"Done — {len(pages)} pages written to site-content.json")

# Quick preview
for p in pages[:6]:
    print()
    print("URL:", p["url"])
    print("Title:", p["title"])
    print("Headings:", [h["text"] for h in p["headings"][:3]])
    preview = p["body_copy"][0][:90] + "..." if p["body_copy"] else "(none)"
    print("Body lines:", len(p["body_copy"]), "| first:", preview)
