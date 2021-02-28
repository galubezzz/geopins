const User = require("../models/User")
const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(process.env.OAUTH_CLIENT_ID)

exports.findOrCreateUser = async token => {
    const googleUser = await verifyAuthToken(token)
    const user = await checkIfUserExists(googleUser.email)
    return user ? user : createNewUser(googleUser)
}

const verifyAuthToken = async token => {
    try{
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.OAUTH_CLIENT_ID
        })
        return ticket.getPayload()
    } catch (err) {
        console.error("Error verifying auth token", err)
    }
}

const checkIfUserExists = async email => {
    try {
        const user = await User.findOne({email}).exec()
        return user
    }
    catch (err){
        console.error("Error finding user", err)
    }
    
}

const createNewUser = googleUser => {
    try {
        const {name, email, picture} = googleUser
        const user = {name, email, picture}
        return new User(user).save()
    } catch (e) {
        console.error("Error createNewUser", e)
    }

}