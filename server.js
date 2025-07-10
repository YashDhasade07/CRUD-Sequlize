import { Sequelize } from "sequelize";

let sequelize = new Sequelize('sequlize-test', 'postgres', 'root', { dialect: 'postgres', })

// sequelize.authenticate().then(() => {
//     console.log('connected')
// }).catch((err) => {
//     console.log('failed', err)
// });

const User = sequelize.define('user', {
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING
    },
    age: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 21
    }
})

User.sync().then(()=>{
    console.log('tabel and model synced')
}).catch((err)=>{
    console.log(err)
})