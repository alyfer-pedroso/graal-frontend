const SECRET_KEY = import.meta.env.VITE_CRYPTOKEY;
const CHARS = import.meta.env.VITE_CHARS;

export function useCrypto() {
  const toBase62 = (uint8: Uint8Array) => {
    let bigInt = BigInt("0x" + [...uint8].map((b) => b.toString(16).padStart(2, "0")).join(""));
    let base62 = "";

    while (bigInt > 0) {
      const rem = Number(bigInt % 62n);
      base62 = CHARS[rem] + base62;
      bigInt /= 62n;
    }

    return base62;
  };

  const fromBase62 = (base62: string) => {
    let bigInt = BigInt(0);

    for (const char of base62) {
      bigInt = bigInt * 62n + BigInt(CHARS.indexOf(char));
    }

    const hex = bigInt.toString(16);
    const hexPadded = hex.length % 2 === 0 ? hex : "0" + hex;
    const bytes = hexPadded.match(/.{1,2}/g).map((b) => parseInt(b, 16));

    return new Uint8Array(bytes);
  };

  const generateKey = async () => {
    const enc = new TextEncoder();
    const hash = await crypto.subtle.digest("SHA-256", enc.encode(SECRET_KEY));

    return crypto.subtle.importKey("raw", hash, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
  };

  const encrypt = async (data: string) => {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await generateKey();
    const enc = new TextEncoder();
    const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(data));

    const totalBuffer = new Uint8Array(iv.byteLength + encrypted.byteLength);
    totalBuffer.set(iv, 0);
    totalBuffer.set(new Uint8Array(encrypted), iv.byteLength);

    return toBase62(totalBuffer);
  };

  const decrypt = async (base62: string) => {
    const data = fromBase62(base62);
    const iv = data.slice(0, 12);
    const encrypted = data.slice(12);
    const key = await generateKey();
    const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, encrypted);

    return new TextDecoder().decode(decrypted);
  };

  return { encrypt, decrypt, toBase62, fromBase62 };
}
