import { isEven } from '@rfs/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}
