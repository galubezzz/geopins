const user = {
    _id: "1",
    name: "Maria",
    email: "galubezzz@gmail.com",
    picture: "https://cloudinary.com/asdf"
}
module.exports = {
    Query: {
        me: () => user
    }
}