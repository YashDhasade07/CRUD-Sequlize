import { Op, fn, col } from "sequelize";
import { Comment, User, Post, sequelize } from "./newServer.js";


// ////////////////////
// User.create({username: 'Juii', email: 'juii@gmail.com', age: 22})
// .then(console.log)
// .catch(console.log)


/////////////////
// Post.create({title: 'Manali vibes2', content: 'test content', userId: 1})
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


// /////////////////
// Post.findAll({raw: true, where:{title: {[Op.like]: 'S%'}}})
// .then((data)=>{
//     // data.forEach(element => {
//     //     console.log(element.username, element['posts.id'])
//     // });
//     console.log(data)
// })
// .catch(console.log)


/////////////////
// User.update({email: 'erin@schooll.edu'}, {where: {id: 5}})
// .then(console.log)
// .catch(console.log)


// //////////////////
// async function run() {
//   let user = await Post.findOne({where: {id: 4}});
//   user.title = 'ORM vs QueryBuilder [Updated]'
//   await user.save()
//   return user
// }
// run()


// //////////////////
// async function run() {
//   let user = await User.destroy({where: {id: 4}});
//   console.log(user)
// }
// run()


// /////////////////
// Post.destroy({where:{ userId :2}})
// .then(console.log)
// .catch(console.log)


// ///////////////////////////////
// User.findAll({where: {age: {[Op.and]:[{[Op.gt] : 20}, {[Op.lt] : 30}]}}, raw: true})
// .then(console.log)
// .catch(console.log)


// ///////////////////////////////
// User.findAll({where: {age: {[Op.between] : [20,30]}}, raw: true})
// .then(console.log)
// .catch(console.log)


// ///////////////////////////////
// User.increment('age',{by : -3, where: {}})
// .then(console.log)
// .catch(console.log)


// ///////////////////////////////
// async function run() {
//     try {
//         let users = await User.findAll();
//         users.map(async (item)=>{
//     item.age= item.age+1;
//     await item.save();
//     console.log(item)
//   })
// } catch (error) {
//     console.log(error)
// }
// }
// run()


// //////////////////////////
// User.findAll({
//     attributes:[ [fn('AVG', col('age')),' averageAge']], raw: true
// })
// .then(console.log)
// .catch(console.log)


// /////////////////
// User.findAll({where:{id:1}, include: Post, raw: true})
// .then(console.log)
// .catch(console.log)


// /////////////
// Post.findAll({include: {model: User, attributes:['username']}, raw: true})
// .then(console.log)
// .catch(console.log)


// ///////////////
// User.findAll({attributes : [[fn('COUNT', col('id')), 'COunt']], raw: true, where:{age: {[Op.between] : [20,30]}}})
// .then(console.log)
// .catch(console.log)


// ///////////////////
// Post.findAll({raw: true, include: [{model: Comment ,attributes:['userId','content'], include: {model: User, attributes:[`username`]}}]})
// .then(console.log)
// .catch(console.log)


// ////////////////////////
// async function run() {
//     let t = await sequelize.transaction();
//     try {
//         let user =  await User.create({username: "Sakshi" , email: 'sakshi@gmail.com', age: 22},{transaction: t});
//         await Post.create({title : `it's jui`, content: 'Jui ghavate', userId: user.id},{transaction: t});
//         let post = await Post.create({title : `it's jui`, content: 'Jui ghavate', userId: user.id},{transaction: t});
//         console.log('post: ', post)
//         // throw new Error('hey there')
//         t.commit()
//         console.log(`done`)
//     } catch (error) {
//         t.rollback()
//         console.log(error)
//         console.log(`not done`)
//     }
// }

// run()


// ////////////////////
// async function run() {
//     let user = await User.findByPk(1);
//      let posts = await user.getPosts();
//      console.log(posts.map(post => post.get()));
// }
// run()


// //////////////////////
// User.findAll({
//     raw: true, order:[['age' , "ASC"],['username', 'DESC']]
// })
// .then(console.log)
// .catch(console.log)


// /////////////////
// User.findAll({
//     attributes:['age', [fn('sUm' , col('age')), 'userCount']],
//     group: ['age'],
//     raw: true,
//     order:[['userCount', 'ASC']]
// })
// .then(console.log)
// .catch(console.log)


// ///////////////////////
// User.findAll({
//     attributes: ['id', 'username', [fn('count', col('posts.id')), 'postCount']],
//     include: {
//         model: Post,
//         attributes: []
//     },
//     group: ['user.id'],
//     raw: true
// })
//     .then(console.log)
//     .catch(console.log)


// // ///////////////////////
// User.findAll({
//     // attributes: ['id', 'username', [fn('count', col('posts.id')), 'postCount']],
//     include: {
//         model: Post,
//         where: {id: 17}
//     },
//     raw: true
// })
//     .then(console.log)
//     .catch(console.log)


// // ////////////////
// // User.findAll({raw: true, limit: 2, offset: (3-1) * 2})
// //     .then(console.log)
// //     .catch(console.log)


// (async () => {
//   await Promise.resolve().then(async () => {
//     console.log("A");
//     await null;
//     console.log("B");
//   });
//   console.log("C");
// })();

// console.log("D");

// (async () => {
//   await Promise.resolve().then(async () => {
//     console.log("A");
//     await null;
//     console.log("B");
//   });
//   console.log("C");
// })();

// console.log("D");

// Promise.resolve("start")
//   .then(() => {
//     return {
//       then: function (resolve, reject) {
//         console.log("custom then called");
//         resolve(); //becouse it not resolved it is considered as promise
//       },
//     };
//   })
//   .then(() => {
//     console.log("next");
//   });

// const thenable = {
//   then(resolve, reject) {
//     console.log("thenable called");
//     resolve("value");
//   },
// };

// Promise.resolve(thenable).then(console.log);

// setTimeout(() => console.log("timeout"), 0);

// Promise.reject("error").catch((e) => {
//   console.log("caught", e);
// });

// console.log("done");

// (async function () {
//   console.log("A");
//   await 0;
//   console.log("B");
// })();

// Promise.resolve().then(() => console.log("C"));
// console.log("D");

// Promise.resolve("Start")
//   .then((res) => {
//     console.log(res);
//     Promise.resolve("Middle");
//   })
//   .then((res) => {
//     console.log("Second:", res);
//     return "End";
//   })
//   .then(console.log);













































































