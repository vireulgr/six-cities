export function getRandomArrayElement<T>(arr: T[]): T {
  return arr[randomFromRange(0, arr.length)];
}

export function randomFromRange(from: number, to: number): number {
  return Math.floor(Math.random() * (to - from)) + from;
}

export function createUniqueRandomSequence(from: number, to: number): () => number {
  const sequence = new Set<number>();
  return () => {
    let res = randomFromRange(from, to);
    while (sequence.has(res)) {
      res = randomFromRange(from, to);
    }
    return res;
  };
}

export function createUniqueIdSequence(from: number, to: number): () => string {
  const seq = createUniqueRandomSequence(from, to);
  return () => {
    const newId = seq();
    return String(newId).padStart(8, '0');
  };
}
