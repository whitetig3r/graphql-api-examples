const express = require('express');
const graphqlHTTP = require('express-graphql'); 
const { buildSchema } = require('graphql');
const crypto = require('crypto');

const db = {
    users:[
        { name:"Warren", id:'avcviy1x', email:"warren1linux@gmail.com" },
        { name: "Wren", id: 'aascavcviy1x', email: "warlinux@gmail.com" }
    ],
    messages: [
        { id: 'avcviy1x', message: 'bleh bleh1'},
        { id: 'aascavcviy1x', message: 'bleh bleh2' }
    ]
}

class User{
    constructor(user){
        Object.assign(this,user);
    }
    
    get messages(){
        return db.messages.filter( msg => msg.id == this.id )
    }
}

const schema = buildSchema(`
    type User {
        name: String!
        id: ID!
        email: String!
        messages: [Message!]!
    }

    type Message {
        id: ID!
        message: String!
    }

    type Mutation {
        addUser( name: String, email: String): User
    }

    type Query {
        users: [User!]!
        user(name: String): User
        messages: [Message!]!
}`)

const rootValue = {
    users : () => db.users.map( user => new User(user) ),
    addUser : ( { name, email } ) => {
        const userTemp = {
            name,
            email,
            id : crypto.randomBytes(10).toString('hex')
        }
        db.users.push(userTemp);
        return userTemp;
    },
    user : ({ name }) => {
        return db.users.find( u => u.name === name );
    },
    messages : () => db.messages
}

// graphql(
//     schema,
//     `   
//         {
//             users {
//                 name
//             }
//         }
//     `,
//     resolver
// ).then(
//     (res)=>{
//         console.log(JSON.stringify(res))
//     }
// ).catch(
//     console.err
// )

const app = express(); 

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('server is up & running!')
})