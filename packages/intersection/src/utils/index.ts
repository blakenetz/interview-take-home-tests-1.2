export function sum(numbers: number[]) {
  return numbers.reduce<number>((acc, val) => acc + val, 0);
}
