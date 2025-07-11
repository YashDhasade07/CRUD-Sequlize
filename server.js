import { Sequelize } from "sequelize";
let {DataTypes} = Sequelize

export let sequelize = new Sequelize('sequlize-test', 'postgres', 'root', { dialect: 'postgres', })
// sequelize.authenticate().then(() => {
//     console.log('connected')
// }).catch((err) => {
//     console.log('failed', err)
// });

export const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    age: {
        type: DataTypes.INTEGER
    }
})
User.sync().then(()=>{
    console.log('tabel and model synced')
    // return User.create({username: 'newYash2', password: 'Yash1234', age: 23})
}).catch((err)=>{
    console.log(err)
})

export let Post = sequelize.define('post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
});

// Asssociations

User.hasMany(Post);
Post.belongsTo(User)