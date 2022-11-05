// we should import like this.. changing will throw error 
import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core/core.cjs';
import { HttpLink } from "@apollo/client/link/http/http.cjs";
import fetch from 'cross-fetch';
const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4000/graphql', fetch }),
    cache: new InMemoryCache()
})

async function getUsers() {
    let result = await client.query({
        query: gql`
        query{
            users {
                    userId
                  }
            }
             `
    })
    console.log("-----------------------------");
    console.log( new Date().toLocaleTimeString() +  ' result:');
    console.log(result.data);
    console.log("-----------------------------");

}

getUsers()
