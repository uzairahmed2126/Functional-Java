# Pure VS Impure
| Pure                                                                                                         | Impure                                                      |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| 1. Expected output will be returned.                                                                         | 1. We don't know the exact answer.                          |
| 2. Everthing will be local.                                                                                  | 2. If something is global it will be impure.                |
| 3. It does not care about the outside world(local scope).                                                    | 3. It cares about the outside world(global scope).          |
| 4. Same output for the same input.                                                                           | 4. Different output for same input.                         |
| 5. Does not have any side effect.                                                                            | 5. It have side effect.                                     |
| 6. Behavior of the state will not change.                                                                    | 6. Behavior of the state of the program system will change. |
| 7. Pure functions are readable because of independent behavior. Moreover, they are straightforward to debug. | 7. It is not Independent behavior and hard to debug.        |

**Pure  function**
```JavaScript
function add(a,b){
    return a+b;
}
console.log(add(5,9));//14
```

**Impure function**
```JavaScript
let a = 5;
function add(b) {
    return a + b;
}
console.log(add(9));//14
```
## The random is also impure because we don't know what the actual answer is, return and on calling it, it will return the different output.

```JavaScript
function random() {
    return Math.random();
}
console.log(random());
```
[For more interesting methods click on this link](./js/pure%20vs%20impure.js)