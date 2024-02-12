import Cipher from "./Cipher";
import CipherCaesar from "./Cipher_Caesar"; 

export default class Encryption {
  private static instance: Encryption;
  public text: string = "";
  public encrypted: string = "";
  public decrypted: string = "";
  
  public crpher: Cipher;

  constructor(crpher: Cipher) {
    this.crpher = crpher
  }

  public static getInstance(): Encryption {
    if (!Encryption.instance) {
      Encryption.instance = new Encryption(new CipherCaesar());
    }
    return Encryption.instance;
  }

  public changeCipher(crpher: Cipher) {
    this.crpher = crpher
  }
}