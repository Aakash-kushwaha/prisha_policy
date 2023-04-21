const Sequelize = require("sequelize") 

// first param databaseName username password
const seq = new Sequelize("casperDb", "root", "root1234", {
    host : "localhost", 
    dialect : "mysql"
})

seq.authenticate()
.then(()=>{
    console.log("Connection Successfull to db")
})


const Users = seq.define("prishatable", {
  userId: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  book_read_times: {
    type: Sequelize.DataTypes.STRING,
  },
  book_details: {
    type: Sequelize.DataTypes.STRING,
  },
  pdf: {
    type: Sequelize.DataTypes.STRING,
  },
  cover: {
    type: Sequelize.DataTypes.STRING,
  },  
  rating:{
    type:Sequelize.DataTypes.STRING,
    defaultValue:3
  }

});


Users.sync()
.then(()=>console.log("synced with the databse"))



module.exports = { seq,Sequelize ,Users}