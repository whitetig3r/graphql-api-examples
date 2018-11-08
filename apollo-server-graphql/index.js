import './src' // Goes straight to src/index.js

// BELOW IS A SIMPLE EXAMPLE OF typeDefs and resolvers on a simple JS object
//
//
//
// const { ApolloServer, gql } = require('apollo-server-express')
// const crypto = require('crypto')

// const db = {
//   users: [
//     { name: 'Warren', id: 'avcviy1x', email: 'warren1linux@gmail.com' },
//     { name: 'Wren', id: 'aascavcviy1x', email: 'warlinux@gmail.com' }
//   ],
//   messages: [
//     { id: 'avcviy1x', message: 'bleh bleh1' },
//     { id: 'aascavcviy1x', message: 'bleh bleh2' }
//   ]
// }

// const typeDefs = gql`
//     type User {
//         name: String!
//         id: ID!
//         email: String!
//         messages: [Message!]!
//     }

//     type Message {
//         id: ID!
//         message: String!
//     }

//     type Mutation {
//         addUser( name: String, email: String): User
//     }

//     type Query {
//         users: [User!]!
//         user(name: String): User
//         messages: [Message!]!
// }`

// const resolvers = {
//   Query: {
//     user: (root, { name }) => {
//       return db.users.find(u => u.name === name)
//     },
//     users: () => db.users,
//     messages: () => db.messages

//   },
//   Mutation: {
//     addUser: (root, { name, email }) => {
//       const userTemp = {
//         name,
//         email,
//         id: crypto.randomBytes(10).toString('hex')
//       }
//       db.users.push(userTemp)
//       return userTemp
//     }
//   },
//   User: {
//     messages: (root) => (
//       db.messages.filter(msg => msg.id == root.id)
//     )
//   }
// }

// // NOTE: 'root' is each User in our fake DB

// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// })

// // set mocks: true to test without resolving to data

// server.listen().then(
//   ({ url }) => {
//     console.log(url)
//   }
// )
