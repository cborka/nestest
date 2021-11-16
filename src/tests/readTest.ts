/*
Здесь пока всё для Postgres,
Переделаю для mongo когда будет готов mongo-gql сервер
 */
import { GraphqlService } from '../graphql/graphql.service'
import { GraphqlQuery } from '../graphql/graphql.query'
import { GraphqlQueryAnswer } from '../graphql/graphql.answer'

export class GraphqlTest {
    private gqlService: GraphqlService = new GraphqlService()

    async readData(): Promise<GraphqlQueryAnswer> {
        const query: GraphqlQuery = {
            query: `
             {
                  groups {
                    id
                    name
                    levelId
                    level {id name}
                    users {
                      name
                      surName
                      login
                      createdAt
                      role {name}
                      status {name}
                      jokes {
                        name
                        text
                        rate
                        like
                        view
                      }
                    }
                  }
            }
            `,
        }
        return await this.gqlService.request(query)
    }

    async readLevels(): Promise<GraphqlQueryAnswer> {
        const query: GraphqlQuery = {
            query: `
             {
              levels {
                id
                name
              }
            }
            `,
        }
        const ret = await this.gqlService.request2(query)
        return await ret.data.levels
    }

    async addLevel(levelName: string): Promise<string> {
        const query: GraphqlQuery = {
            query: `
             mutation {
              createLevel(input: {
                name: "${levelName}"
                }) 
              {
                id
              }
            }
             `,
        }
        const ret = await this.gqlService.request2(query)
        return await ret.data.createLevel.id
    }
    async addStatus(statusName: string): Promise<string> {
        const query: GraphqlQuery = {
            query: `
             mutation {
              createStatus(input: {
                name: "${statusName}"
                }) 
              {
                id
              }
            }
             `,
        }
        //        return await this.gqlService.request(query);
        const ret = await this.gqlService.request2(query)
        return await ret.data.createStatus.id
    }

    async addRole(roleName: string): Promise<string> {
        const query: GraphqlQuery = {
            query: `
             mutation {
              createRole(input: {
                name: "${roleName}"
                }) 
              {
                id
              }
            }
             `,
        }
        const ret = await this.gqlService.request2(query)
        return await ret.data.createRole.id
    }

    async addUser(
        userName: string,
        surName: string,
        login: string,
        password: string,
        roleId: string,
        statusId: string,
    ): Promise<string> {
        const query: GraphqlQuery = {
            query: `
             mutation {
              createUser(input: { 
                name: "${userName}" 
                surName: "${surName}"
                login: "${login}"
                password: "${password}"
                roleId: "${roleId}"
                statusId: "${statusId}"
              }) {
                id
              }
            }
             `,
        }
        const ret = await this.gqlService.request2(query)
        return await ret.data.createUser.id
    }

    async addJoke(
        jokeName: string,
        text: string,
        rate: number,
        like: number,
        view: string,
        userId: string,
    ): Promise<string> {
        const query: GraphqlQuery = {
            query: `
            mutation {
              createJoke(input: { 
                name: "${jokeName}" 
                text: "${text}"
                rate: ${rate}
                like: ${like}
                view: "${view}"
                userId: "${userId}"
              }) {
                id
              }
            }
             `,
        }
        const ret = await this.gqlService.request2(query)
        return await ret.data.createJoke.id
    }

    async addGroup(
        groupName: string,
        groupShortName: string,
        levelId: string,
    ): Promise<string> {
        const query: GraphqlQuery = {
            query: `
             mutation {
              createGroup(
                input: {
                  name: "${groupName}"
                  shortName: "${groupShortName}"
                  levelId: "${levelId}"
                }
              ) {
                id
                name
              }
            }
             `,
        }
        //        return await this.gqlService.request(query);
        const ret = await this.gqlService.request2(query)
        return await ret.data.createGroup.id
    }

    async addUserInGroup(userId: string, groupId: string): Promise<string> {
        const query: GraphqlQuery = {
            query: `
                mutation {
                  createUserInGroup(input: { 
                    userId: "${userId}"
                    groupId: "${groupId}"
                  }) {
                    createdAt
                  }
                }             
                `,
        }
        //        return await this.gqlService.request(query);
        const ret = await this.gqlService.request2(query)
        return await ret.data.createUserInGroup.createdAt
    }

    async addData1(): Promise<string> {
        const sid = '17'
        let levelId: string
        let groupId: string
        let status1Id: string
        let status2Id: string
        let role1Id: string
        let role2Id: string
        let user1Id: string
        let user2Id: string
        let joke1Id: string
        let joke2Id: string
        let joke3Id: string
        let joke4Id: string
        let userInGroup1: string
        let userInGroup2: string

        levelId = await this.addLevel('level' + sid)
        groupId = await this.addGroup('group', 'ShortName', levelId)

        role1Id = await this.addRole('role1-' + sid)
        role2Id = await this.addRole('role2-' + sid)
        status1Id = await this.addStatus('status1-' + sid)
        status2Id = await this.addStatus('status2-' + sid)
        user1Id = await this.addUser(
            'name1-' + sid,
            'surName1-' + sid,
            'login1-' + sid,
            'passsword1-' + sid,
            role1Id,
            status1Id,
        )
        user2Id = await this.addUser(
            'name2-' + sid,
            'surName2-' + sid,
            'login2-' + sid,
            'passsword2-' + sid,
            role2Id,
            status2Id,
        )
        joke1Id = await this.addJoke(
            'name1-' + sid,
            'text1-' + sid,
            1 + +sid,
            11 + +sid,
            'view1-' + sid,
            user1Id,
        )
        joke2Id = await this.addJoke(
            'name2-' + sid,
            'text2-' + sid,
            2 + +sid,
            12 + +sid,
            'view2-' + sid,
            user1Id,
        )
        joke3Id = await this.addJoke(
            'name3-' + sid,
            'text3-' + sid,
            3 + +sid,
            13 + +sid,
            'view3-' + sid,
            user2Id,
        )
        joke4Id = await this.addJoke(
            'name4-' + sid,
            'text4-' + sid,
            4 + +sid,
            14 + +sid,
            'view4-' + sid,
            user2Id,
        )

        userInGroup1 = await this.addUserInGroup(user1Id, groupId)
        userInGroup2 = await this.addUserInGroup(user2Id, groupId)

         console.log('levelId' + levelId)

        console.log('role1Id' + role1Id)
        console.log('role2Id' + role2Id)
        console.log('status1Id' + status1Id)
        console.log('status2Id' + status2Id)
        console.log('user1Id' + user1Id)
        console.log('user2Id' + user2Id)
        console.log('joke1Id' + joke1Id)
        console.log('joke2Id' + joke2Id)
        console.log('joke3Id' + joke3Id)
        console.log('joke4Id' + joke4Id)
        console.log('userInGroup1' + userInGroup1)
        console.log('userInGroup2' + userInGroup2)

        return sid
    }
}
