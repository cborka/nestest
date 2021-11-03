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

// import joke from './joke'
// import test from './test'

//commander.version('1.0.0').description('Jokes reader and tester')

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