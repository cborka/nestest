#!/usr/bin/env node

/**
 * Commander for launch and testing requests for joke resource
 *
 * @see README.md for details
 *
 * Run
 * node dist/commander <command> [options]
 *
 * @packageDocumentation
 */

import { Command } from 'commander';
const commander = new Command();

import chalk = require('chalk')
import inquirer = require('inquirer')

import {GraphqlTest} from "./tests/readTest";

commander.version('1.0.0').description('')

commander.command('test1').action(() => {
    const gqlTest: GraphqlTest = new GraphqlTest()

    gqlTest.readLevels()
    .then(
        (ret) => {
            if (! ret.message) {
                console.log(JSON.stringify(ret.data))
            }
            else {
                console.log('=> ' + ret.message)
            }
        }
    )
    .catch((err) => {
        console.log('ERRORR: ' + err)
    })
})

commander.command('test3').action(async () => {
    const gqlTest: GraphqlTest = new GraphqlTest()

    let ret = await gqlTest.addData2()
    console.log(ret)
})

commander.command('test2').action(async () => {
    const gqlTest: GraphqlTest = new GraphqlTest()

    console.log(JSON.stringify(await gqlTest.readLevels2()))
})

commander.command('lvl3').action(async () => {
    const gqlTest: GraphqlTest = new GraphqlTest()

    const sid: string = "43"
    let levelId: string;
    let groupId: string;
    let status1Id: string;
    let status2Id: string;
    let role1Id: string;
    let role2Id: string;
    let user1Id: string;
    let user2Id: string;
    let joke1Id: string;
    let joke2Id: string;
    let joke3Id: string;
    let joke4Id: string;

    gqlTest.addLevel('level' + sid)
    .then(
        (ret) => {
            if (! ret.message) {
                levelId = ret.data.createLevel.id
                console.log("levelId " + levelId)
                return gqlTest.addGroup('Group' + sid, 'GR' + sid, levelId);
//                return levelId
            }
            else {
                console.log('=> ' + ret.message)
            }
        }
        ,(err) => {console.log('err: ' + err)}
    )
    .then(
        (ret) => {
            if (! ret.message) {
                groupId = ret.data.createGroup.id
                console.log("groupId " + groupId)
//                return gqlTest.addGroup('Group' + sid, 'GR' + sid, levelId);
                return groupId
            }
            else {
                console.log('=> ' + ret.message)
            }
        }
        ,(err) => {console.log('err: ' + err)}
    )
    .then(
        (groupId) => {
            console.log("++groupId " + groupId)
            console.log("++levelId " + levelId)

        }
    )
    .catch((err) => {
        console.log('ERRORR: ' + err)
    })

})

commander.command('lvl2').action(async () => {
    const gqlTest: GraphqlTest = new GraphqlTest()

    const sid: string = "41"
    let levelId: string;
    let groupId: string;

    gqlTest.addLevel('level' + sid)
    .then(
        (ret) => {
            if (! ret.message) {
                levelId = ret.data.createLevel.id
                console.log("levelId " + levelId)
                return gqlTest.addGroup('Group' + sid, 'GR' + sid, levelId);
//                return levelId
            }
            else {
                console.log('=> ' + ret.message)
            }
        }
        ,(err) => {console.log('err: ' + err)}
    )
    .then(
        (ret) => {
            if (! ret.message) {
                groupId = ret.data.createGroup.id
                console.log("groupId " + groupId)
//                return gqlTest.addGroup('Group' + sid, 'GR' + sid, levelId);
                return groupId
            }
            else {
                console.log('=> ' + ret.message)
            }
        }
        ,(err) => {console.log('err: ' + err)}
    )
    // .then(
    //     (levelId) => {
    //         console.log("+levelId " + levelId)
    //         console.log("+sid " + sid)
    //         let ret = gqlTest.addGroup('Group' + sid, 'GR' + sid, levelId);
    //         groupId = ret.data.createLevel.id
    //         console.log("groupId " + groupId)
    //         return groupId
    //     }
    // )
    .then(
        (groupId) => {
            console.log("++groupId " + groupId)
            console.log("++levelId " + levelId)

        }
    )
    .catch((err) => {
        console.log('ERRORR: ' + err)
    })

})

commander.command('lvl').action(async () => {
    const gqlTest: GraphqlTest = new GraphqlTest()

    let id: string = "25"
    let levelId;
    let groupId;

    try {
        let ret = await gqlTest.addLevel('level' + id);
        if (!ret.message) {
            levelId = ret.data.createLevel.id
            console.log("levelId " + levelId)
            ret = await gqlTest.addGroup('Group' + id, 'GR' + id, levelId);
            if (!ret.message) {
                groupId = ret.data.createLevel.id
                console.log("groupId " + groupId)
            }

        }

    }
    catch (err) {
        console.log('ERRORR: ' + err)
    }



//    let id = await gqlTest.addLevel('level15').data.createLevel.id;
//    console.log(id);

    //console.log(JSON.stringify(await gqlTest.addLevel('level15')))


    // gqlTest.addLevel('level13')
    // .then(
    //     (ret) => {
    //         if (! ret.message) {
    //             console.log(JSON.stringify(ret.data.createLevel.id))
    //         }
    //         else {
    //             console.log('Error: ' + ret.message)
    //             // console.log('-> ' + ret.response.data)
    //             // console.log(ret.response.data)
    //         }
    //     }
    // )
    // .catch((err) => {
    //     console.log('ERRORR: ' + err)
    // })


//    console.log(gqlTest.readLevels())
})




commander.command('t').action(() => {
    console.log("T")
})

commander.command('hi').action(() => {
    inquirer
        .prompt([
            {
                type: 'string',
                name: 'name',
                default: 'Yorick',
                message: 'Who are you? : ',
            },
        ])
        .then((my: { name?: string }): void => {
            console.log(chalk.blue(`Ну привет, ${  my.name}`))
        })
})


commander.parse(process.argv)