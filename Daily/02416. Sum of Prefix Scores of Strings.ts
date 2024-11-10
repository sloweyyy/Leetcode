class TrieNode {
    children: Map<string, TrieNode>;
    count: number;

    constructor() {
        this.children = new Map();
        this.count = 0;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
            node.count++;
        }
    }

    getPrefixScore(word: string): number {
        let node = this.root;
        let score = 0;
        for (const char of word) {
            if (!node.children.has(char)) {
                break;
            }
            node = node.children.get(char)!;
            score += node.count;
        }
        return score;
    }
}

function sumPrefixScores(words: string[]): number[] {
    const trie = new Trie();
    for (const word of words) {
        trie.insert(word);
    }

    const scores: number[] = [];
    for (const word of words) {
        scores.push(trie.getPrefixScore(word));
    }

    return scores;
}