const clone1 = Object.assign({}, person);
const clone2 = { ...person };
const samePerson = person;

// Modify the original person
person.age += 1;
person.country = 'FR'