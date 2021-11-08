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
import now = require('performance-now')

import chalk = require('chalk')
import inquirer = require('inquirer')

import { GraphqlTest } from './tests/readTest'

commander.version('1.0.0').description('')

commander.command('add').action(async () => {
    const gqlTest: GraphqlTest = new GraphqlTest()

    let endTime = 0
    let beginTime = 0

    inquirer
        .prompt([
            {
                type: 'number',
                name: 'count',
                default: '2',
                message: 'Сколько групп данных занести? : ',
            },
        ])
        .then(async (my: { count: number }): Promise<void> => {

            beginTime = now()

            for (let i = 0; i<my.count; i++) {
                let ret = await gqlTest.addData1()
                console.log(ret)
            }

            endTime = now()

            console.log(
                `Data writing took ${chalk.red(
                    (endTime - beginTime).toFixed(3)
                )} milliseconds.`,
            )

        })
})


commander.command('read').action(async () => {
    const gqlTest: GraphqlTest = new GraphqlTest()

    let endTime = 0
    let beginTime = 0


    beginTime = now()

    console.log(JSON.stringify(await gqlTest.readData()))

    endTime = now()

    console.log(
        `Data writing took ${chalk.red(
            (endTime - beginTime).toFixed(3)
        )} milliseconds.`,
    )
})

commander.parse(process.argv)
