import os
import json
import subprocess


def get_language_stats():
    result = subprocess.run(
        ['github-linguist', '--json'], stdout=subprocess.PIPE)
    return json.loads(result.stdout)


def generate_language_section(language_stats):
    total_bytes = sum(language_stats.values())
    language_section = ""
    for language, bytes_ in language_stats.items():
        percentage = (bytes_ / total_bytes) * 100
        language_section += f"- {language}: {percentage:.2f}%\n"
    with open('languages.txt', 'w') as f:
        f.write(language_section)


if __name__ == "__main__":
    language_stats = get_language_stats()
    generate_language_section(language_stats)
