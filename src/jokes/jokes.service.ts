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
}
