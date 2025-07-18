import { Sequelize } from "sequelize";
let {DataTypes} = Sequelize


export let sequelize = new Sequelize('sequlize-test', 'postgres', 'root', { dialect: 'postgres' })

export let User = sequelize.define('user', {
     username:{type: DataTypes.STRING, unique: true, allowNull: false},
      email: {type: DataTypes.STRING, unique: true},
       age: {type: DataTypes.INTEGER}
});


export let Post = sequelize.define('post', { 
    title:{type: DataTypes.STRING , allowNull: false},
    content: {type: DataTypes.TEXT} 
})


export let Comment = sequelize.define('comment', { 
    content: {type: DataTypes.TEXT, allowNull: false} 
})

// User.hasMany(Post);
// Post.belongsTo(User)

// User.hasMany(Comment);
// Post.hasMany(Comment);
// Comment.belongsTo(Post)
// Comment.belongsTo(User)

User.hasMany(Post,    { foreignKey: 'userId' });
Post.belongsTo(User,  { foreignKey: 'userId' });

User.hasMany(Comment, { foreignKey: 'userId' });
Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(User, { foreignKey: 'userId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });





























