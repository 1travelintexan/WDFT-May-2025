function capitalFirstLetter(word) {
  if (!word) return null;
  if (typeof word === "number") {
    return "please provide a name";
  }
  const firstLetter = word[0].toUpperCase();
  const upperCasedWord = firstLetter + word.slice(1);
  return upperCasedWord;
}
