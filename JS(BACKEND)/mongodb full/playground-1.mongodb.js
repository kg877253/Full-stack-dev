// Select the database to use.

use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the courses collection.

db.getCollection('courses').insertMany([
  {
    name: 'python',
    price: NumberInt('150000')
  },

  {
    name: 'javascript',
    price: NumberInt('180000')

  },

  {
    name: 'react',
    price: NumberInt('220000')
  },
  {
    name: 'nodejs',
    price: NumberInt('190000')
  },
  {
    name: 'mongodb',
    price: NumberInt('160000')
  },
  {
    name: 'express',
    price: NumberInt('120000')
  },
  {
    name: 'typescript',
    price: NumberInt('210000')
  },
  {
    name: 'c++',
    price: NumberInt('17000000')
  },
  {
    name: 'sql',
    price: NumberInt('140000')
  },
  {
    name: 'docker',
    price: NumberInt('230000')
  }

]
);


// Print a message to the output window.
console.log(`data inserted successfully`);
