#validate-keys

Validates an object´s keys against a set of keys. Throws an error if object´s keys are not present.

```
var validateKeys = require('validate-keys');

validateKeys({a:0,b:1,c:2},['a','b','c']); //passes
validateKeys({a:0,b:1,d:2},['a','b','c']); //throws 'Uncaught Error: Invalid key "d". Available keys: "a", "b", "c"'

```