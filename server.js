const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs")
const resolvers = require("./resolvers")
const mongoose = require("mongoose");
const { auth } = require("google-auth-library");
const {findOrCreateUser} = require("./controllers/userController")
require("dotenv").config()
mongoose
.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("DB connected!"))
.catch(err=>console.log(err))
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({req})=>{
        let authToken = null
        let currentUser = null
        try {
            authToken = req.headers.authorization
            if (authToken) {
                currentUser = await findOrCreateUser(authToken)
            }
        }catch(err){
            console.log(`Unable to authenticate user with token`)
        }
        return {currentUser}
    }
})

server.listen({port: process.env.PORT || 4000}).then(({url}) => {
    console.log(`server ${url}`)
});