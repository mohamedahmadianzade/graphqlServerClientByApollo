const resolvers = {
    Query: {
        users: (_,__,context) => {
            return [{
                userId: "1", password: "1", username: "test", name: "test"
            }]
        }
    }
}
export default resolvers
