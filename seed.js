import { Post, User, sequelize } from "./server.js";


async function seed() {
    await sequelize.sync({ force: true });
    const alice = await User.create({
        username: "Alice",
        email: 'Alice@gmail.com',
        age: 28
    })

    const bob = await User.create({username: 'Bob', email: 'bob@gmail.com' , age: 34})

    console.log('a ', alice.id)
    console.log('b ', bob.id)

     await Post.bulkCreate([
    { title: 'Hello World',     content: 'My first post',   userId: alice.id },
    { title: 'Sequelize Tips',   content: 'Advanced stuff',  userId: alice.id },
    { title: 'Node + Postgres',  content: 'Connection guide', userId: bob.id },
  ]);

    console.log('seeded')

}

seed().catch(console.log)