import axios from 'axios';

class RestClientService {
    client = null;
    query = ''
    graphqlServer = 'http://localhost:4000/graphql'

    async runQuery() {
        let result = await axios.post(this.graphqlServer, {query:this.query}, {
            headers: {
                'Content-Type': 'application/json'
            } , 
        })
        console.log("-----------------------------");
        console.log(new Date().toLocaleTimeString() + ' result:');
        console.log(result.data.data);
        console.log("-----------------------------");
    }


}

async function run() {
    const service = new RestClientService()
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



