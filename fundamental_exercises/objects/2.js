const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);
// This returns the functions themselves
// In order to get the name like we want, we have to put:
console.log(`${person.firstName()} ${person.lastName()}`);

