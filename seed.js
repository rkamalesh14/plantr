const { db } = require("./models");

console.log(db);

db.sync({force: true}).then(() => {
  console.log('Database synced!');
}).catch(err => {
  console.log(err);
}).finally(() => {
  db.close()
});
