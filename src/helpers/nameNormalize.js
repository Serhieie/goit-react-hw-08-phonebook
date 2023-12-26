export default function normalizeName(value) {
  const splited = value.split(' ').map(word => {
    if (word.length === 0) return '';
    const firstChar = word[0];
    const restOfWord = word.slice(1).toLowerCase();
    return firstChar.toUpperCase() + restOfWord;
  });

  return splited.join(' ').trim();
}
