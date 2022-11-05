// we should import like this.. changing will throw error 
import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core/core.cjs';
import { HttpLink } from "@apollo/client/link/http/http.cjs";
import fetch from 'cross-fetch';

class ApolloClientService {
    client = null;
    query = ''
    graphqlServer='http://localhost:4000/graphql'
    createClient() {
        this.client = new ApolloClient({
            link: new HttpLink({ uri:  this.graphqlServer, fetch }),
            cache: new InMemoryCache()
        })
    }
    async runQuery() {
        let result = await this.client.query({
            query: gql(this.query)
        })

        console.log("-----------------------------");
        console.log(new Date().toLocaleTimeString() + ' result:');
        console.log(result.data);
        console.log("-----------------------------");
    }


}

async function run() {
    const service = new ApolloClientService()
    service.createClient()
    service.query = `
    query{
        users {
                userId
              }
        }
         `
    service.runQuery()
}

run()



