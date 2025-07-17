
import { Op } from "sequelize";
import { Post, User, sequelize } from "./server.js";
///////////
// User.create({username: 'Yash', email: 'yash@gmail.com', age : 23})
//     .then(()=>{
//         console.log('User created')
//     }).catch(console.log)


//////////////
// Post.create({title: 'test',content: 'Test post',userId: 3})
//     .then(()=>{
//         console.log('Post created')
//     }).catch(console.log)


///////
// async function run (){
//     let Jui =await User.create({username: 'Jui', email: 'jui@gmail.com', age : 22})
//     await Jui.createPost({title: 'Jui post',content: 'Test post 1'})
//     console.log('user and post created')
// }
// run()


// ///////////
// User.findAll({where:{username:'Yash'},raw: true}).then((data)=>{
//     console.log(data)
// }).catch(console.log)


/////////////////
// User.findByPk(4)
// .then((data)=>{
//     console.log(data.get())
// })
// .catch(console.log)


/////////////////
// Post.findOne({where: { content: 'Connection guide',}})
// .then((data)=>{
//     console.log(data.get())
// })
// .catch(console.log)


///////////////
// async function run() {
//     let user = await User.findOne({where: {username: 'Yash'}});;
//     user.age -= 1;
//     user.save();
//     console.log(user.get())
// }
// run()


////////////////////
User.update({email: 'yashdhasade@gmail.com'},{where: {id: 3}})

