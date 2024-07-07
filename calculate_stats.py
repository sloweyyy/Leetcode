import os
import json
import subprocess


def get_language_stats():
    try:
        result = subprocess.run(
            ['github-linguist', '--json'], stdout=subprocess.PIPE, check=True)
        return json.loads(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Error occurred while running github-linguist: {e}")
        return {}
    except FileNotFoundError:
        print("The github-linguist command is not found. Make sure it is installed and accessible.")
        return {}


def generate_language_section(language_stats):
    if not language_stats:
        with open('languages.txt', 'w') as f:
            f.write("No language statistics available.")
        return

    total_bytes = 0
    language_bytes = {}

    for language, data in language_stats.items():
        bytes_count = data.get('size', 0)
        language_bytes[language] = bytes_count
        total_bytes += bytes_count

    language_section = ""
    for language, bytes_ in language_bytes.items():
        percentage = (bytes_ / total_bytes) * 100 if total_bytes > 0 else 0
        language_section += f"- {language}: {percentage:.2f}%\n"

    with open('languages.txt', 'w') as f:
        f.write(language_section)


if __name__ == "__main__":
    language_stats = get_language_stats()
    generate_language_section(language_stats)
