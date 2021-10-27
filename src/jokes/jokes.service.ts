import { Injectable, NotFoundException } from '@nestjs/common'
import { Joke, JokeCategorys } from './joke.model'
import axios from 'axios'

@Injectable()
export class JokesService {
    private jokesUrl = 'https://v2.jokeapi.dev/joke/Any'
    private joke: Joke

    constructor() {
        this.joke = new Joke()
    }

    /**
     * Request for a joke using Async - await
     */
    //async getJoke(cat: JokeCategorys = JokeCategorys.Any) {
    async getJoke(cat: JokeCategorys) {
        let joke = this.joke
        try {
            const response = await axios.get(this.jokesUrl)
            const data = response.data

            joke.id = data.id
            joke.category = data.category + cat.toString()
            //            joke.cat = cat.toString()

            if (data.type === 'twopart') {
                joke.text = data.setup + ' -- ' + data.delivery
            } else {
                joke.text = data.joke
            }

            joke.flags = []
            for (let key in data.flags) {
                if (data.flags[key]) joke.flags.push(key)
            }
        } catch (error) {
            throw new NotFoundException('Joke error')
        }
        return joke
    }
}
