#!/usr/bin/env npx ts-node --esm

import axios from 'axios';
import chalk from 'chalk';
import clear from 'clear'
import figlet from 'figlet'

interface People {
  name: string;
  craft: string;
}

interface Astros {
  number: number;
  people: People[]
}

const response = await axios.get<Astros>("http://api.open-notify.org/astros.json");

clear();
console.log(chalk.yellowBright(figlet.textSync('InSpace', { horizontalLayout: 'full' })));
console.log(chalk.blue(`There is currently ${response.data.number} people in space`));
response.data.people.forEach(person => console.log(`${person.name} - ${chalk.yellow(person.craft)}`));
