import { Op } from "sequelize";
import { Comment,User,Post, sequelize } from "./newServer.js";


// ////////////////////
// User.create({username: 'Juii', email: 'juii@gmail.com', age: 22})
// .then(console.log)
// .catch(console.log)


// /////////////////
// Post.create({title: 'Manali vibes', content: 'test content', userId: 6})
// .then(console.log)
// .catch(console.log)


// ////////////////
// User.findAll({include: Post, raw: true})
// .then((data)=>{
//     data.forEach(element => {
//         console.log(element.username, element['posts.id'])
//     });
// })
// .catch(console.log)


// ///////////
// User.findByPk(6)
// .then(console.log)
// .catch(console.log)


///////////////////
Post.findAll({raw: true, where:{title: {[Op.like]: 'S%'}}})
.then((data)=>{
    // data.forEach(element => {
    //     console.log(element.username, element['posts.id'])
    // });
    console.log(data)
})
.catch(console.log)











































































