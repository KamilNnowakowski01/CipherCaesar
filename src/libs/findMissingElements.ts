import alphabet from "../enum/alphabet";

export default function findMissingElements(
  checkArray: string[],
  array = alphabet
) {
  let myArray = array
  return myArray.filter((element) => !checkArray.includes(element));
}
