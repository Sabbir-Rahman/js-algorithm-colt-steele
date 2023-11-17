class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = true;
        } else if (index < word.length) {
            var char = word[index];
            var subTrie = this.characters[char] || new Trie();
            subTrie.addWord(word, index + 1);
            this.characters[char] = subTrie;
        }
        return this;
    }

    findWord(word, index = 0) {
        // This function will return the node in the trie
        // which corresponds to the end of the passed in word.

        // Be sure to consider what happens if the word is not in this Trie.

        var char = word[index];
        if (index < word.length - 1 && this.characters[char]) {
            index += 1;
            return this.characters[char].findWord(word, index);
        } else {
            return this.characters[char];
        }
    }
    getWords(words = [], currentWord = "") {
        // This function will return all the words which are
        // contained in this Trie.
        // it will use currentWord as a prefix,
        // since a Trie doesn't know about its parents.

        if (this.isWord) {
            words.push(currentWord);
        }
        for (var char in this.characters) {
            var nextWord = currentWord + char;
            this.characters[char].getWords(words, nextWord);
        }
        return words;
    }
    autoComplete(prefix) {
        // This function will return all completions
        // for a given prefix.
        // It should use find and getWords.
        var subTrie = this.find(prefix);
        if (subTrie) {
            return subTrie.getWords([], prefix);
        } else {
            return [];
        }
    }
    removeWord(word, index=0) {
        if (index === word.length) {
      this.isWord = false;
      // If the current Trie node has no other children and is not the end of another word, it can be removed.
      return Object.keys(this.characters).length === 0 && !this.isWord;
    }

    const currentChar = word[index];
    if (!this.characters[currentChar]) {
      // The word is not in the Trie
      return false;
    }

    // Recursively remove the word from the Trie
    const canRemoveNode = this.characters[currentChar].removeWord(word, index + 1);

    // If the child node can be removed, delete the reference to it
    if (canRemoveNode) {
      delete this.characters[currentChar];
    }

    // Check if the current node can be removed (no other children and not the end of another word)
    return Object.keys(this.characters).length === 0 && !this.isWord;
    }
}
