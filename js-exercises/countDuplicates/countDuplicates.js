// Marginally faster than:
//
// function duplicateCount(text){
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }


function duplicateCount(text) {
  let duplicatedCharacters = {};
  let singleCharacters = {};

  for (let i = 0; i < text.length; i++) {
    let characterTested = text[i].toUpperCase();
    let isInSingleCharacters = `c_${characterTested}` in singleCharacters;
    let isInDuplicatedCharacters =
      `c_${characterTested}` in duplicatedCharacters;

    switch (true) {
      case !isInSingleCharacters && !isInDuplicatedCharacters:
        singleCharacters[`c_${characterTested}`] = 1;
        break;
      case isInSingleCharacters:
        delete singleCharacters[`c_${characterTested}`];
        duplicatedCharacters[`c_${characterTested}`] = 1;
        break;
      case isInDuplicatedCharacters:
        break;
    }
  }
  return Object.keys(duplicatedCharacters).length;
}
