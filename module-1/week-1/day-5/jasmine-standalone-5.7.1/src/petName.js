//getPetNames should receive one argument that is an array of pets
function getPetNames(arrayOfPets) {
  const petNameArray = [];
  for (let i = 0; i < arrayOfPets.length; i++) {
    const onePet = arrayOfPets[i];
    const petName = onePet["pet name"];
    petNameArray.push(petName);
  }
  return petNameArray;
}
