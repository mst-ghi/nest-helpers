## NestJs Helpers

> A package for use in the NestJs framework that includes commonly used auxiliary methods in developing web projects

> &NewLine;

### Installation

```bash
# npm
$ npm install --save nest-helpers

# yarn
$ yarn add nest-helpers
```

&NewLine;

### Getting Started

&NewLine;

> **`Fingilish()`**

```typescript
import { Fingilish } from 'nest-helpers';

let eString = Fingilish('مصطفی')
console.log(eString) // mostafa
```

> **`ConvertToSlug()`**

```typescript
import { ConvertToSlug } from 'nest-helpers';

let foo = ConvertToSlug('foo bar')
console.log(foo) // foo-bar
let bar = ConvertToSlug('foo bar', '_')
console.log(bar) // foo_bar
```

> **`ExistValueInEnum()`**

```typescript
import { ExistValueInEnum } from 'nest-helpers';

let yourEnum = ['foo', 'bar']
let flag = ExistValueInEnum(yourEnum, 'foo')
if(flag) console.log('exist') 
else console.log('not exist')
```

> **`CleanEmpty()`**

```typescript
import { CleanEmpty } from 'nest-helpers';

let yourObj = {
  foo : 'bar',
  nullValue: null,
  undefinedValue: undefined,
}
let newObj = ExistValueInEnum(yourEnum, 'foo')
console.log(newObj)
//{
//  foo : 'bar',
//}
```

> **`AddDate()`**

```typescript
import { AddDate } from 'nest-helpers';

let newDate = AddDate(
  2, // The length you want to add to the date
  'minutes', // keys exists in https://momentjs.com/docs/#/manipulating/add/
  yourDate // If it is null, the current date is considered
)
console.log(newDate) // your date + 2 minute
```

> **`SubtractDate()`**

```typescript
import { SubtractDate } from 'nest-helpers';

let newDate = SubtractDate(
  2, // The length you want to subtract of the date
  'minutes', // keys exists in https://momentjs.com/docs/#/manipulating/subtract/
  yourDate // If it is null, the current date is considered
)
console.log(newDate) // your date - 2 minute
```

> **`StrRemoveSpace()`**

```typescript
import { StrRemoveSpace } from 'nest-helpers';

let str = StrRemoveSpace('foo bar')
console.log(str) // foobar
```

> **`ConvertPersianNumbersToEnglish()`**

```typescript
import { ConvertPersianNumbersToEnglish } from 'nest-helpers';

let numbers = ConvertPersianNumbersToEnglish('۰۱۲۳۴۵۶۷۸۹')
console.log(numbers) // 0123456789
```

> **`CompareTwoArrayIds()`**

```typescript
import { CompareTwoArrayIds } from 'nest-helpers';

let baseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
let newArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

let {isEqual, removedItems, addedItems} = CompareTwoArrayIds(baseArray, newArray)
// isEqual: true or false
// removedItems: deleted items from the base array
// addedItems: items added to the new array
```

> **`HashGenerator()`**

```typescript
import { HashGenerator } from 'nest-helpers';

let hash = HashGenerator(8)
console.log(hash) // hash 8 characters
```

> **`RandomString()`**

```typescript
import { RandomString } from 'nest-helpers';

let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let str = RandomString(
  11, // The length you want generate string
  charSet // default value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
)
console.log(str) // str 11 characters
```
> **`RandomDigit()`**

```typescript
import { RandomDigit } from 'nest-helpers';

let digit = RandomDigit(6)
console.log(digit) // 123456
```

> **`IsEmail()`**

```typescript
import { IsEmail } from 'nest-helpers';

let flag = IsEmail('mostafagholamidev@gmail.com')
if(flag) console.log('valid') 
else console.log('invalid')
```

> **`IsObjectId()`**

```typescript
import { IsObjectId } from 'nest-helpers';

let flag = IsObjectId('5f59efa0d965bd4bf5c72840')
if(flag) console.log('valid') 
else console.log('invalid')
```

> **`IsArrayObjectId()`**

```typescript
import { IsArrayObjectId } from 'nest-helpers';

let arrayObjectIds = ['5f59efa0d965bd4bf5c72840', '5f59a88ce313e24968818b1b']
let flag = IsArrayObjectId(arrayObjectIds)
if(flag) console.log('valid') 
else console.log('invalid')
```

> **`IsEmptyObject()`**

```typescript
import { IsArrayObjectId } from 'nest-helpers';

let arrayObjectIds = ['5f59efa0d965bd4bf5c72840', '5f59a88ce313e24968818b1b']
let flag = IsArrayObjectId(arrayObjectIds)
if(flag) console.log('valid') 
else console.log('invalid')
```

> **`IsPersian()`**

```typescript
import { IsPersian } from 'nest-helpers';

let flag = IsPersian('مصطفی')
if(flag) console.log('is persian') 
else console.log('is not persian')
```

> **`IsEnglish()`**

```typescript
import { IsEnglish } from 'nest-helpers';

let flag = IsEnglish('mostafa')
if(flag) console.log('is english') 
else console.log('is not english')
```

&NewLine;

##### Change Log

> See [Changelog](CHANGELOG.md) for more information.

##### Contributing

> Contributions welcome! See [Contributing](CONTRIBUTING.md).

##### Author

> **Mostafa Gholami** [`mst-ghi`](https://github.com/mst-ghi)