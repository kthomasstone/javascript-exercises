const findTheOldest = function() {
  const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

  const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

  for (i = 0; i < people.length; i++) {
    people[i].age = getAge(people[i].yearOfBirth, people[i].yearOfDeath);
  }

  people.sort((person1, person2) => person2.age - person1.age);
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
