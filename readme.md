# Functional JS.
## Pure VS Impure
| Pure                                                                                                         | Impure                                                      |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| 1. Expected output will be return.                                                                           | 1. We don't know the exact answer.                          |
| 2. Everthing will be local.                                                                                  | 2. If something is global it will impure.                   |
| 3. It do not care about outside the world(local).                                                            | 3. It care about outside the world(global).                 |
| 4. Same output for same the input.                                                                           | 4. Different output for same input.                         |
| 5. Do not have any side effect.                                                                              | 5. It have side effect.                                     |
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