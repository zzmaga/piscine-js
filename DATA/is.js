/*
Add new function properties to the is object to check value types. Each function should take one argument, and return a boolean.

is.num: value is a number.
is.nan: value is NaN.
is.str: value is a string.
is.bool: value is a boolean.
is.undef: value is undefined.
is.def: value is defined.
is.arr: value is an array.
is.obj: value is a simple object or null objects.
is.fun: value is a function.
is.truthy: value is truthy.
is.falsy: value is falsy.
*/

const is = {};

is.num = value => typeof value === 'number';
is.nan = value => typeof value === 'number' && Number.isNaN(value);
is.str = value => typeof value === 'string';
is.bool = value => typeof value === 'boolean';
is.undef = value => typeof value === 'undefined';
is.def = value => typeof value !== 'undefined';
is.arr = value => Array.isArray(value);
is.obj = value => typeof value === 'object' && value !== null && !Array.isArray(value);
is.fun = value => typeof value === 'function';
is.truthy = value => !!value;
is.falsy = value => !value;