import Cipher from "../class/Cipher.ts";
import Alphabet from "../enum/enumAlphabet.ts";

export default class Cipher_Caesar extends Cipher {
  private alphabet = Object.values(Alphabet) as string[];
  public encryptAlphabet: string[] = [];

  public decode(text: string): string {
    console.log("Cipher_Caesar");
    let result: string = "";

    for (const char of text) {
      let index = this.encryptAlphabet.indexOf(char);
      if (index >= 0) {
        result += this.alphabet[index];
      } else {
        result += "";
      }
    }

    return result;
  }

  public encrypt(text: string): string {
    let result: string = "";
    let textUpperCase = text.toUpperCase();
    for (const char of textUpperCase) {
      let index = this.alphabet.indexOf(char);
      if (index >= 0) {
        result += this.encryptAlphabet[index];
      } else {
        result += "";
      }
    }

    return result;
  }
}
