//import { Injectable, NotFoundException } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import axios from 'axios'

import {GraphqlQuery} from "./graphql.query";
import {GraphqlQueryAnswer} from "./graphql.answer";

@Injectable()
export class GraphqlService {
    constructor() {
    }

     /*
     * Request for a GraphQL server
     *
     * @param url: string
     * @param query: GraphqlQuery
     *
     * @return GraphqlQueryAnswer
     *
     */
    public async request(query: GraphqlQuery): Promise<GraphqlQueryAnswer> {
//        let ret = 'ret_value'

        let url = "http://localhost:3000/graphql"
        return await axios.post(url, query,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {return response.data; }
            )
            .catch( (error) => {return error}
            );

        //return await ret ;
    }

    public async request2(query: GraphqlQuery): Promise<GraphqlQueryAnswer> {
//        let ret = 'ret_value'
        let url = "http://localhost:3000/graphql"
        const ret = await axios.post(url, query,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // .then(response => {return response.data; }
            // )
            // .catch( (error) => {return error}
            // );

        return await ret.data;
    }

}

