import { Injectable, NotFoundException } from '@nestjs/common'
import { GraphQLClient, gql } from 'graphql-request'

const serverURL = 'http://localhost:3000/graphql/';

@Injectable()
export class GraphqlService {

    private client;

    constructor () {
        this.client = new GraphQLClient(serverURL, {})
    }

    /**
     * Request for a graphql
     */
    public async request (query: string = ''): Promise<string> {

        const data = await this.client.request(query)
        return data
    }
}