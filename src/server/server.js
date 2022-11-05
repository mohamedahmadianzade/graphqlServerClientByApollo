import typeDefs from "./typeDef.js"
import resolvers from "./resolvers.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'


const server = new ApolloServer({
    typeDefs, resolvers
})
const { url } = await startStandaloneServer(server, {
    context: async ({ req, res }) => {
        logRequest(req)
        return {

        }
    }
})
console.log("-----");
console.log(" Server is Running !");
console.log("-----");


const logRequest = (req) => {
    if (req.body.operationName != "IntrospectionQuery")
        {
            console.log("--------------------------------");
            console.log(new Date().toLocaleTimeString() +  ' -- Query  ==> ', req.body.query);
            console.log("--------------------------------");
        }
}



