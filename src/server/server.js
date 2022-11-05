import typeDefs from "./typeDef.js"
import resolvers from "./resolvers.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'


const server = new ApolloServer({
    typeDefs, resolvers
})
const { url } = await startStandaloneServer(server, {
    context: async () => {
        return {

        }
    }
})
console.log("-----");
console.log(" Server is Running !");
console.log("-----");




