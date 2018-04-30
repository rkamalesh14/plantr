const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr', {logging: false});

const Gardener = db.define("gardener", {
  name: {
    type: Sequelize.STRING,
    allowNull: false

  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false

  }
});

const Plot = db.define("plot", {
  size: {
    type: Sequelize.STRING,
    allowNull: false

  },
  shaded: {
    type: Sequelize.BOOLEAN,
    allowNull: false

  }
});

const Vegetable = db.define("vegetable", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  }
});






module.exports = {
  db,
  Vegetable,
  Gardener,
  Plot,
}
