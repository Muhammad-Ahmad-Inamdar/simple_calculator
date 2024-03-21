#!/usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    { message: 'Enter first number', type: 'number', name: 'first_number' },
    { message: 'Enter second number', type: 'number', name: 'second_number' },
    { message: 'Chose any mathematical operator',
        type: 'list',
        name: 'operator',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'] }
]);
// conditional statement //
if (answer.operator === 'Addition') {
    console.log(`Answer is : ${answer.first_number + answer.second_number}`);
}
else if (answer.operator === 'Subtraction') {
    console.log(`Answer is : ${answer.first_number - answer.second_number}`);
}
else if (answer.operator === 'Multiplication') {
    console.log(`Answer is : ${answer.first_number * answer.second_number}`);
}
else if (answer.operator === 'Division') {
    console.log(`Answer is : ${answer.first_number / answer.second_number}`);
}
else {
    'You did not chose properly';
}
