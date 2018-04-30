const { db, Gardener, Vegetable, Plot } = require("./models");

// console.log(db);

let veggies, createdPlots, createdGardeners;

db.sync({force: true}).then(() => {
  console.log('Database synced!');
})
.then(addVeggies)
  // .then(createdVeggies => {
  //   this.veggies = createdVeggies
  //   // create promises for Gardeners
  //   return Promise.all([gp1, gp2, gp3])
  // })
  // .then(gardeners => {
  //   console.log(gardeners)
  //   console.log(this.veggies)
  //   this.gardeners = gardeners
  //   // return some other p
  // })
  .then(addGardeners)
  .then(addPlots)
  .catch(err => {
  console.log(err);
}).finally(() => {
  db.close()
});

function addVeggies () {
const potato = new Vegetable({
  name: "potato",
  color: "brown",
  date: "2015-01-03"
})

const carrot = new Vegetable({
  name: "carrot",
  color: "orange",
  date: "2039-12-25"
})

const eggplant = new Vegetable({
  name: "eggplant",
  color: "purple",
  date: "1999-12-20"


})

let createdVeggies = {
  potato,
  carrot,
  eggplant,
}

veggies = createdVeggies

return Promise.all([potato.save(), carrot.save(), eggplant.save()])

// await potato.save()
// await carrot.save()
// await eggplant.save()

}


function addGardeners () {
  const gabe = new Gardener ({
    name: "gabe",
    age: 34,
  })

  const jon = new Gardener ({
    name: "jon",
    age: 37,
  })

  const matt = new Gardener ({
    name: "matt",
    age: 37,
  })

  return Promise.all([gabe.save(), jon.save(), matt.save()])

}

function addPlots () {
  const plot1 = new Plot ({
    size: "200 ft",
    shaded: false
  })

  const plot2 = new Plot ({
    size: "300 ft",
    shaded: true,
  })

  const plot3 = new Plot ({
    size: "400 ft",
    shaded: true,
  })

  return Promise.all([plot1.save(), plot2.save(), plot3.save()])
}


function associations (chain) {


return chain
}

Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);
Vegetable.belongsToMany(Plot, {through: "vegPlot"});
Plot.belongsToMany(Vegetable, {through: "vegPlot"});
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'});

veggies.carrot.addPlots(plot1);
