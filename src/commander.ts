#!/usr/bin/env node

/**
 * Commander for launch and testing requests
 *
 * @see README.md for details
 *
 * Run
 * node dist/commander <command> [options]
 *
 * @packageDocumentation
 */

import { Command } from 'commander'
const commander = new Command()

// import chalk = require('chalk')
// import inquirer = require('inquirer')

import { GraphqlTest } from './tests/readTest'

commander.version('1.0.0').description('')

commander.command('test1').action(() => {
    const gqlTest: GraphqlTest = new GraphqlTest()

    gqlTest
        .readData()
        .then((ret) => {
            if (!ret.message) {
                console.log(JSON.stringify(ret.data))
            } else {
                console.log('=> ' + ret.message)
            }
        })
        .catch((err) => {
            console.log('ERRORR: ' + err)
        })
})

commander.command('add').action(async () => {
    const gqlTest: GraphqlTest = new GraphqlTest()

    let ret = await gqlTest.addData1()
    console.log(ret)
})

commander.command('read').action(async () => {
    const gqlTest: GraphqlTest = new GraphqlTest()

    console.log(JSON.stringify(await gqlTest.readData()))
})

commander.parse(process.argv)
