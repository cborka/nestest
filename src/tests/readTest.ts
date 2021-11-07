
import {GraphqlService} from "../graphql/graphql.service";
import {GraphqlQuery} from "../graphql/graphql.query";
import {GraphqlQueryAnswer} from "../graphql/graphql.answer";

export class GraphqlTest {
    private sid: string = "45"
    private levelId: string;
    private groupId: string;
    private status1Id: string;
    private status2Id: string;
    private role1Id: string;
    private role2Id: string;
    private user1Id: string;
    private user2Id: string;
    private joke1Id: string;
    private joke2Id: string;
    private joke3Id: string;
    private joke4Id: string;

    private gqlService: GraphqlService =  new GraphqlService()

    async readLevels(): Promise<GraphqlQueryAnswer> {

        const query: GraphqlQuery = {
            query: `
             {
              levels {
                id
                name
              }
              
              groups {
                id
                name
                shortName
              }

              statuses {
                id
                name
              }
              
              jokes
              {
                id
                name
                text
              }
            
              users
              {
                id
                name
              }


            }
            `
        }
        return await this.gqlService.request(query);
    }

    async readLevels2(): Promise<GraphqlQueryAnswer> {
        const query: GraphqlQuery = {
            query: `
             {
              levels {
                id
                name
              }
            }
            `
        }
        const ret = await this.gqlService.request2(query)
//        console.log(ret)
        return await ret

//        return await this.gqlService.request2(query);
    }

    async addLevel(levelName: string): Promise<string> {
        const query: GraphqlQuery = {
            query: `
             mutation {
              createLevel(input: {
                id: "0"
                name: "${levelName}"
                }) 
              {
                id
              }
            }
             `
        }
//        return await this.gqlService.request(query);
        const ret = await this.gqlService.request2(query)
        return await ret.data.createLevel.id
    }
   async addStatus(statusName: string): Promise<string> {
        const query: GraphqlQuery = {
            query: `
             mutation {
              createStatus(input: {
                id: "0"
                name: "${statusName}"
                }) 
              {
                id
              }
            }
             `
        }
//        return await this.gqlService.request(query);
        const ret = await this.gqlService.request2(query)
        return await ret.data.createStatus.id
    }

    async addGroup(groupName:string, groupShortName: string, levelId: string): Promise<string> {
        const query: GraphqlQuery = {
            query: `
             mutation {
              createGroup(
                input: {
                  id: "0"
                  name: "${groupName}"
                  shortName: "${groupShortName}"
                  levelId: "${levelId}"
                }
              ) {
                id
                name
              }
            }
             `
         }
//        return await this.gqlService.request(query);
        const ret = await this.gqlService.request2(query)
        return await ret.data.createLevel.id
    }

    async addData1(): Promise<string> {
        this.levelId = await this.addLevel('level' + this.sid)
        this.status1Id = await this.addStatus('status1-' + this.sid)
        this.status2Id = await this.addStatus('status2-' + this.sid)
        console.log(this.levelId)
        console.log(this.status1Id)
        console.log(this.status2Id)

        return this.status2Id
    }

    async addData2(): Promise<string> {
//        let x:string = await this.addData1();
        let x = await this.addLevel('level' + this.sid)
        this.groupId = await this.addGroup(
            'Group' + this.sid,
            'GR' + this.sid,
            x)
//            this.levelId = await this.addLevel('level' + this.sid) )
        console.log(this.groupId)

        return "1"
    }

    async addData(): Promise<void> {

        return new Promise(function(resolve, reject) {
            let x:string = this.addData1();
            resolve(x);
        })
        .then((val) => {
            console.log(val);
            return val + "2"
        })
        .then((val) => {
            console.log(val); return val + "3"
        })
        .then((val) => console.log('finish'))

    }







}