#!/usr/bin/env npx ts-node --esm

import axios from 'axios';
import chalk from 'chalk';
import clear from 'clear'
import figlet from 'figlet'

type People = {
  name: string;
  craft: string;
}

type Inhabitants = {
  number: number;
  people: People[]
}

async function getInhabitantsOfSpace() {
  const response = await axios.get<Inhabitants>("http://api.open-notify.org/astros.json");
  return response.data;
}

clear();
console.log(chalk.yellowBright(figlet.textSync('InSpace', { horizontalLayout: 'full' })));
const inhabitants = await getInhabitantsOfSpace();
console.log(chalk.blue(`There is currently ${inhabitants.number} people in space`));
inhabitants.people.forEach(person => console.log(`${person.name} - ${chalk.yellow(person.craft)}`));
