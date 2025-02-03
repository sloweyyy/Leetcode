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
        return "No language statistics available."

    total_bytes = 0
    language_bytes = {}

    for language, data in language_stats.items():
        if isinstance(data, dict) and 'size' in data:
            bytes_count = data['size']
            language_bytes[language] = bytes_count
            total_bytes += bytes_count

    sorted_languages = sorted(language_bytes.items(),
                              key=lambda item: item[1], reverse=True)

    language_section = ""
    for language, bytes_ in sorted_languages:
        percentage = (bytes_ / total_bytes) * 100 if total_bytes > 0 else 0
        language_section += f"- {language}: {percentage:.2f}%\n"

    return language_section


def update_readme(language_section):
    readme_content = f"""
# LeetCode & Algorithmic Solutions

**Author:** SloWey
**Email:** truonglevinhphuc2006@gmail.com

This repository documents my journey through Data Structures and Algorithms (DSA) by solving LeetCode problems. I'm using this as a way to improve my coding skills and prepare for technical interviews.

## Languages Used

Here's a breakdown of the languages I've been using, along with their contribution percentage:

{language_section}

## Contents

*   **Codeforce Contests:** Solutions from Codeforces competitions.
*   **Codeforce Problemset:** Solutions from specific problems on Codeforces.
*   **LeetCode Daily:** My solutions to daily LeetCode challenges.
*   **Weekly Contest:** Solutions from LeetCode Weekly Contests.

## Getting Started

### Prerequisites

*   Ensure you have the necessary compilers or interpreters installed for the languages you want to explore.

### Usage

*   Feel free to browse the code and adapt it to your needs. Each file typically contains the solution to one specific problem.
*   Use these solutions as references for understanding algorithms and coding techniques.

## Contributing

I welcome your contributions! If you'd like to contribute a solution or an improvement:

1.  Fork this repository.
2.  Create a new branch with a descriptive name for your changes.
3.  Implement your solution and provide clear comments and documentation.
4.  Test your code thoroughly.
5.  Open a pull request detailing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

Feel free to reach out via email at truonglevinhphuc2006@gmail.com for any questions, feedback, or suggestions."""
    with open('README.md', 'w') as f:
        f.write(readme_content)


if __name__ == "__main__":
    language_stats = get_language_stats()
    language_section = generate_language_section(language_stats)
    update_readme(language_section)
