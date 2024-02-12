import Alphabet from "../enum/enumAlphabet";
import shuffleArray from "../libs/shuffleArray";

export default abstract class Cipher {
  public encryptAlphabet: string[] = []

  public randomAlphabet(): string[] {
    const alphabet = Object.values(Alphabet) as string[];
    const randomAlphabet = shuffleArray(alphabet);
    return randomAlphabet;
  }

  abstract decode(text: string): string;
  abstract encrypt(text: string): string;
}
