import alphabet from "../enum/alphabet";

export default function changeCodeArray(
  arrayCode: string[],
  indexLetter: string,
  newLetter: string,
  arrayAlphabet: string[] = alphabet
): string[] {
  let myArrayCode = arrayCode;

  const index = arrayAlphabet.indexOf(indexLetter);
  const indexOld = myArrayCode.indexOf(newLetter);
  myArrayCode[indexOld] = "";
  myArrayCode[index] = newLetter;

  return arrayCode;
}
