import Dexie from 'dexie';

const db = new Dexie('DogDB');

// Declare tables, IDs and indexes
db.version(1).stores({
  dogs: '++id, name, breed, age, weight',
  load: '++id, score, dogID, date',
});

export default db;
