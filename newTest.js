import { Comment,User,Post, sequelize } from "./newServer.js";

await sequelize.sync({force: true})
  .then(() => console.log('All tables created'))
  .catch(console.error);
export const users = [
  { username: 'alice', email: 'alice@example.com', age: 28 },
  { username: 'bob',   email: 'bob@example.com',   age: 34 },
  { username: 'carl',  email: 'carl@example.com',  age: 22 },
  { username: 'dana',  email: 'dana@example.com',  age: 45 },
  { username: 'erin',  email: 'erin@example.com',  age: 19 },
];
User.bulkCreate(users)
.then(console.log)
.catch(console.log)


export const posts = [
    { title: 'Hello World',     content: 'My first post',    userId: 1 },
    { title: 'Sequelize Tips',   content: 'Advanced stuff',   userId: 1 },
    { title: 'Node + Postgres',  content: 'Connection guide',  userId: 2 },
    { title: 'ORM vs QueryBuilder', content: 'Debate time',   userId: 2 },
    { title: 'Async Patterns',   content: 'Promises, async/await', userId: 3 },
    { title: 'Transactions',     content: 'How to rollback', userId: 4 },
    { title: 'Hooks',            content: 'BeforeCreate, etc.', userId: 4 },
    { title: 'Scopes',           content: 'Model-scopes deep dive', userId: 5 },
];

Post.bulkCreate(posts)
.then(console.log)
.catch(console.log)



export const comments = [
  { content: 'Great post!',    postId: 1, userId: 2 },
  { content: 'Thanks for sharing', postId: 1, userId: 3 },
  { content: 'Very helpful',   postId: 2, userId: 5 },
  { content: 'Could improve',  postId: 2, userId: 4 },
  { content: 'Nice read',      postId: 3, userId: 1 },
  { content: 'I disagree',     postId: 4, userId: 5 },
  { content: 'Good point',     postId: 5, userId: 2 },
  { content: 'Need examples',  postId: 6, userId: 3 },
  { content: 'Well written',   postId: 7, userId: 1 },
  { content: 'Scope is cool',  postId: 8, userId: 4 },
  { content: 'Question: x?',   postId: 8, userId: 2 },
  { content: '👍',             postId: 3, userId: 5 },
];

Comment.bulkCreate(comments)
.then(console.log)
.catch(console.log)




























