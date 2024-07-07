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

    language_section = ""
    for language, bytes_ in language_bytes.items():
        percentage = (bytes_ / total_bytes) * 100 if total_bytes > 0 else 0
        language_section += f"- {language}: {percentage:.2f}%\n"

    return language_section


def update_readme(language_section):
    readme_content = f"""
# LeetCode Solutions

**Author:** SloWey  
**Email:** truonglevinhphuc2006@gmail.com

## About

This repository showcases my journey of learning Data Structures and Algorithms (DAS) through solving various LeetCode problems in multiple programming languages. LeetCode is a platform for practicing coding and algorithmic challenges, and this repository aims to provide clear and well-documented solutions to help others improve their problem-solving skills and prepare for coding interviews.

## Languages

{language_section}

## Table of Contents

- [Leetcode Solutions](#leetcode-solutions)
  - [About](#about)
  - [Languages](#languages)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Getting Started

### Prerequisites

To run the solutions, ensure you have the respective compilers or interpreters installed and configured on your system for the programming languages you want to use.

## Usage

Each solution file contains code to solve a specific LeetCode problem. You can use these solutions as a reference to understand various algorithms and coding techniques. 

Feel free to clone or download this repository and explore the solutions in your preferred programming language.

## Contributing

Contributions are welcome! If you'd like to contribute a solution in any of the supported languages or suggest improvements, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Implement your solution or improvement.
4. Add documentation and comments to your code.
5. Test your code to ensure it works correctly.
6. Create a pull request with a clear description of your changes.

## License

This repository is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions, suggestions, or feedback, feel free to reach out to me via email at truonglevinhphuc2006@gmail.com.
"""
    with open('README.md', 'w') as f:
        f.write(readme_content)


if __name__ == "__main__":
    language_stats = get_language_stats()
    language_section = generate_language_section(language_stats)
    update_readme(language_section)
