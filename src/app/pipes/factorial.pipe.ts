import { Pipe, PipeTransform } from "@angular/core"

function factorial(num: number) {
    if (num == 1)
        return 1
    return num * factorial(num - 1)
}
@Pipe({
  name: 'factorial',
  pure: true
})
export class Factorial  {
  transform(val: number) {
    return factorial(val)
  }
}