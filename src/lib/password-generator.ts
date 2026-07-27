export const CHARACTER_SETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
} as const;

export interface GeneratorOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export type RandomValues = (values: Uint32Array) => Uint32Array;

const webCryptoRandomValues: RandomValues = (values) => crypto.getRandomValues(values);

export function secureRandomIndex(upperBound: number, randomValues: RandomValues = webCryptoRandomValues): number {
  if (!Number.isSafeInteger(upperBound) || upperBound < 1 || upperBound > 0x100000000) {
    throw new RangeError('upperBound must be an integer between 1 and 2^32');
  }

  const range = 0x100000000;
  const rejectionLimit = Math.floor(range / upperBound) * upperBound;
  const sample = new Uint32Array(1);

  do {
    randomValues(sample);
  } while (sample[0] >= rejectionLimit);

  return sample[0] % upperBound;
}

export function secureChoice<T>(values: ArrayLike<T>, randomValues: RandomValues = webCryptoRandomValues): T {
  if (values.length === 0) throw new RangeError('Cannot select from an empty collection');
  return values[secureRandomIndex(values.length, randomValues)];
}

export function secureShuffle<T>(values: readonly T[], randomValues: RandomValues = webCryptoRandomValues): T[] {
  const shuffled = [...values];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = secureRandomIndex(index + 1, randomValues);
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

export function generateSecurePassword(options: GeneratorOptions, randomValues: RandomValues = webCryptoRandomValues): string {
  const selectedSets = (Object.keys(CHARACTER_SETS) as Array<keyof typeof CHARACTER_SETS>)
    .filter((key) => options[key])
    .map((key) => CHARACTER_SETS[key]);
  const activeSets = selectedSets.length > 0 ? selectedSets : [CHARACTER_SETS.lowercase];

  if (!Number.isSafeInteger(options.length) || options.length < activeSets.length) {
    throw new RangeError('Password length must fit every enabled character class');
  }

  const characters = activeSets.map((set) => secureChoice(set, randomValues));
  const combinedSet = activeSets.join('');
  while (characters.length < options.length) {
    characters.push(secureChoice(combinedSet, randomValues));
  }

  return secureShuffle(characters, randomValues).join('');
}

export function generateSecurePassphrase(
  words: readonly string[],
  wordCount: number,
  separator: string,
  randomValues: RandomValues = webCryptoRandomValues,
): string {
  if (!Number.isSafeInteger(wordCount) || wordCount < 1) throw new RangeError('wordCount must be positive');
  return Array.from({ length: wordCount }, () => secureChoice(words, randomValues)).join(separator);
}
