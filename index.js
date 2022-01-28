#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

console.log(chalk.bgGreen('Yo Satwi'));

let playerName;
// since we need a couple of sec to display the animation, we are now calling a helper function. 
//It takes an arg of millisec that defaults to 2000 and results a promise with a setTimeout.
const sleep = (ms=4000)=> new Promise((r)=>setTimeout(r,ms)); 

async function welcome()   //will animate the text
{
    const rainbowTitle= chalkAnimation.rainbow("🏆 Kaun banega  Korodpathi ? (VCE Version)🏆\n");

    await sleep();        //allows rainbow to animate for 2sec
    rainbowTitle.stop();  // to move on to the next step

    //console logging the actual instructions to the game
    console.log(` ${chalk.bgBlueBright('HOW TO PLAY : \n')} 
                > I am Mr.Ramana(your Principal,aka  ${chalk.bgYellow('Mr.Invisible')}) living on your computer.🤖 \n
                > If u get any Question wrong I will be ${chalk.bgRed('killed')}🔪\n
                > So, u better get all the questions right.. 🤝🏽🤝🏽\n
    
    `);
        //the backticks create a js "template literal"  - to interpolate values into the text.
        //Also Creates multiline logs without manually including line break charecters.
}
async function askName() 
{
    const answers =await inquirer.prompt(
        {
            name: 'player_name',
            type: 'input',                  //input like a form user gives input
            message: '  What is your name ?\n',
            default() {return 'Player'; },
        }
    );
    playerName=answers.player_name;
}


async function question1() 
{
    const answers =await inquirer.prompt(
        {
            name: 'question_1',
            type: 'list',                  //list has multiple choices to choose from
            message: 'How many times did u bunk clg ?\n',
            choices: [
                      ' 0',
                      ' < 10',
                      ' > 25',
                      ' Vasavi is a good college. I do not bunk', 
                     ],
        }
    );
    return handleAnswer1(answers.question_1 == ' > 25');   

}
async function handleAnswer1(isCorrect)
{
    const spinner =createSpinner('Checking answer...\n').start();
    await sleep();

    if (isCorrect)
    {
        spinner.success({text: `  Good job ${playerName}. Come to my office ASAP 🤨😑😠\n`});
    }
    else{
        spinner.error({ text: `  💀💀👺 You lost the game ${playerName}!. U think I am Dumb😑😑? \n `});
        process.exit(1);
    }
}

async function question2() 
{
    const answers =await inquirer.prompt(
        {
            name: 'question_2',
            type: 'list',                  //list has multiple choices to choose from
            message: ' How spacious is our clg?\n',
            choices: [
                      ' 13.6 acres',
                      ' 21.2 acres',
                      ' Yes',
                      ' 62.5 acres', 
                     ],
        }
    );
    return handleAnswer2(answers.question_2 == ' 13.6 acres');   

}

async function handleAnswer2(isCorrect)
{
    const spinner =createSpinner('Checking answer...\n').start();
    await sleep();

    if (isCorrect)
    {
        spinner.success({text: `  Good job ${playerName}.\n But u r not supposed to reveal things like that and take izzath.😡🤫\n`});
    }
    else{
        spinner.error({ text: `  💀💀👺 You lost the game ${playerName}!. \nSupension for 2 days\n`});
        process.exit(1);
    }
}






async function question3() 
{
    const answers =await inquirer.prompt(
        {
            name: 'question_3',
            type: 'list',                  //list has multiple choices to choose from
            message: ' How many multi-purpose halls do we have in our campus ?\n',
            choices: [
                      ' 1',
                      ' 3',
                      ' 5',
                      ' iukuk', 
                     ],
        }
    );
    return handleAnswer3(answers.question_3 == ' iukuk');   

}
async function handleAnswer3(isCorrect)
{
    const spinner =createSpinner('Checking answer...\n').start();
    await sleep();

    if (isCorrect)
    {
        spinner.success({text: `  Good job ${playerName}. That's right.\n Why?  iukuk🥱\n`});
    }
    else{
        spinner.error({ text: `  💀💀👺 You lost the game ${playerName}!.\n Pay an extra 50k as fine, we gotta build new buildings soon\n`});
        process.exit(1);
    }
}




async function question4() 
{
    const answers =await inquirer.prompt(
        {
            name: 'question_4',
            type: 'list',                  //list has multiple choices to choose from
            message: ' What snacks were given when Manasa Varanasi came to our clg ?\n',
            choices: [
                      ' Karachi Biscuits',
                      ' 2 Kajus',
                      ' A Multilayer rainbow  cake thats ususally served for 1y old kid bdays',
                      ' All of the above', 
                     ],
        }
    );
    return handleAnswer4(answers.question_4 == ' All of the above');   

}
async function handleAnswer4(isCorrect)
{
    const spinner =createSpinner('Checking answer...\n').start();
    await sleep();

    if (isCorrect)
    {
        spinner.success({text: `Good job ${playerName}. That's right. \nWe don't care abt Miss Universe,  Vasavi still acts like its KinderGarten 😎 `});
    }
    else{
        spinner.error({ text: `💀💀👺 You lost the game ${playerName}!. Supension for 2 days\n`});
        process.exit(1);
    }
}
function winner()
{
    console.clear();
    figlet(`✨🎉🎊 Congratulations  ${playerName} !\n  Rs. 1, 0 0 0 , 0 0 0 `,
    (err,data)=>
               { console.log(gradient.pastel.multiline(data)+'\n');
                 console.log(chalk.greenBright(`Vasavi Rocks, Everybody Shocks😎😎`));
                 process.exit(0);
               }
    );
}
console.clear()
await welcome()      
await askName() 
await question1()
await question2()
await question3()
await question4()
winner()


