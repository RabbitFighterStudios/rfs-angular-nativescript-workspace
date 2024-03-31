import { isEven } from '@rfs-angular-nativescript-workspace/is-even'

export function isOdd(x: number): boolean {
  return !isEven(x)
}
