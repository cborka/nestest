import { Injectable, NotFoundException } from '@nestjs/common'
import axios from 'axios'

import { GraphqlService } from '../graphql/graphql.service'

import { JokeCategorys } from './category.enum'
import { Joke } from './joke.model'

const gqlService = new GraphqlService()

@Injectable()
export class JokesService {
    private jokesUrl = 'https://v2.jokeapi.dev/joke/'
    private joke: Joke

    constructor() {
        this.joke = new Joke()
    }

    /**
     * Request for a joke using Async - await
     */
    // async getJoke(cat: JokeCategorys = JokeCategorys.Any) {
    async getJoke(cat: JokeCategorys = JokeCategorys.Any) {
        const { joke } = this
        try {
            const response = await axios.get(this.jokesUrl + cat.toString())
            const { data } = response

            joke.id = data.id
            joke.category = data.category
            joke.cat = cat.toString()

            if (data.type === 'twopart') {
                joke.text = `${data.setup} -- ${data.delivery}`
            } else {
                joke.text = data.joke
            }

            joke.flags = []
            for (const key in data.flags) {
                if (data.flags[key]) {
                    joke.flags.push(key)
                }
            }
        } catch (error) {
            throw new NotFoundException('Joke error')
        }
        return joke
    }

    /**
     * Request for a joke using GraphQL
     */
    gqlGetJoke() {
        const query = `
        {
            joke (cat: "Any" ){
                id
                category
                text
                flags
            }
        }
        `
        return gqlService.request(query)
    }


    async gqlGetJoke2(): Promise<string> {
        let ret = 'ret_value'
        // const query = `
        // {
        //     joke (cat: "Any" ){
        //         id
        //         category
        //         text
        //         flags
        //     }
        // }
        // `

//         const query = `{
// "query": "{ jokeAll { id text } }"
// }
//         `
        let cat = "Spooky";
        const query = {
            query: ` query ($cat: String!)
            { 
                joke (cat: $cat) { 
                    id 
                    text
                    cat
                    category 
                    flags
                }  
            } `
            ,
            variables: {
                cat: cat
            }

        }
        await axios.post("http://localhost:3000/graphql",
             query,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {ret = response.data; console.log(response.data)}
            )
            .catch( (error) =>  console.log(error)
            );

        return await ret ;
//        return gqlService.request(query)
    }
}
