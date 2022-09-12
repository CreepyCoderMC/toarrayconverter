# To Array Converter
This module is small but easy to use. The purpose of this module is to check if a value is a array but if it is not an array it will convert the value into an array.
## Conversion Processes
The code checks if the value passed is any array, if not it will create an array with only that value.
## Code sample
This following code is actually how I tested that all methods correctly functioned as intended, is also provided in this module.
```
import { convertToArray } from '/@teamcoder/toarrayconverter';

console.log( "Testing Condition  1 Passed = " + Array.isArray( convertToArray ( "Hallo World") ) );
console.log( "Testing Condition  2 Passed = " + Array.isArray( convertToArray ( [ "Hallo" , "World" ] ) ) );
```
The results will look as follows
```
Testing Condition  1 Passed = true
Testing Condition  2 Passed = true
```
## Function Parameters
### Parameters Passed
```
@param  { Any   } source  The source value to turned in to an array
```
### Parameters Returned
```
@return { Array }         Return new array or array if already an array
```
## Notes Before You Start
Very important to remember to always include the following in your main project package.json file:
```
"type": "module"
```
Without this entry in the package file you will get the following error if you try to run your project
```
(node:15500) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use 'node --trace-warnings ...' to show where the warning was created)
C:\Users\ ... \toarrayconverter\toarrayconverter.js:1
import { convertToArray } from '@teamcoder/toarrayconverter';
```
## Version History
| Version  | Date                   | Remark                                                                                                |
|----------|------------------------|-------------------------------------------------------------------------------------------------------|
| 1.0.0    | 12 September 2022      | Official first release                                                                                |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i /@teamcoder/toarrayconverter
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
ToArrayConverter © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)