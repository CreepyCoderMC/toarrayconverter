import { convertToArray } from '/@teamcoder/toarrayconverter';

console.log( "Testing Condition  1 Passed = " + Array.isArray( convertToArray ( "Hallo World" ) ) );
console.log( "Testing Condition  2 Passed = " + Array.isArray( convertToArray ( [ "Hallo" , "World" ] ) ) );