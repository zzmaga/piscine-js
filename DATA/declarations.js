const escapeStr = "'\\/\\" + '"' + "'";
const arr = Object.freeze([4, '2']);

const nestedArr = Object.freeze([4, undefined, '2']);
const nestedObj = Object.freeze({
    str: "Nested string",
    num: 100,
    bool: false
})

const nested = Object.freeze({
    arr: nestedArr,
    obj: nestedObj
})

//Main object
const obj = Object.freeze({
    str: "Hello, World",
    num: 42,
    bool: true, 
    undef: undefined,
    nested: nested
});