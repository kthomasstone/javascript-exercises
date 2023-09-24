const getTheTitles = function() {
  const books = [
    {
      name: "Book",
      author: "Name",
    },
    {
      name: "Book2",
      author: "Name2",
    },
  ];

  let arrayOfNames = [];

  for (let i = 0; i < books.length; i++) {
    arrayOfNames.push(books[i].name);
  }
  return arrayOfNames;
};

// Do not edit below this line
module.exports = getTheTitles;
