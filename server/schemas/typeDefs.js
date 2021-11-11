
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    },
    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    },
    input BookDataInput {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    },
    type Query {
        me: User
    },
    type Mutation{
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String, username: String, password: String!): Auth
        saveBook(bookData: BookDataInput): User
        deleteBook(bookId: String!): User
    }
    type Auth {
        token: ID!
        user: User
    }
`
module.exports = typeDefs;