/*
 * Query for a GraphQL server
 *
 * @example
 *
 *   let gql_query: GraphqlQuery
 *   let cat = "Spooky";
 *
 *   gql_query = {
 *       query: ` query ($cat: String!)
 *        {
 *            joke (cat: $cat) {
 *                id
 *                text
 *            }
 *        } `
 *        ,
 *        variables: {
 *            cat: cat
 *        }
 *    }
 */

export class GraphqlQuery {
    query?: string
    variables?: object
}
