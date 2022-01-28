# Satwi's Command Line game 

This is just a simple command line game made for fun. 
> Note:
>  The characters in the game are purely real. Nothing is imaginary. 
> The creator is not responsible for any possible hurt feelings. Please take a humor pill.

## 🔗Modules Used🛒:
1. chalk 
2. chalk-animation
3. figlet
4. gradient-string 
5. inquirer
6. nanospinner
  
## 🔗How I made ⚙🛠
* First Let's make the base folder ready-
```
mkdir JardCmdGame
npm init -y                                                                        -creates a json file to install the dependencies
npm i chalk chalk-animation figlet gradient-string inquirer nanospinner            -installing the dependencies
```
* Open the folder in VsCode/anyother editor
* 
* Now Inside the json file, change the type to "module". 
  This will tell nodejs that we wanna use ESM Modules whichallows us to use the "import export" syntax instead of the commonjs "require" function.
  
* Now create a index.js file and add the below as the first line.
  >> ``` #!/usr/bin/env node ```
  > Its called a SHEBANG #!. 
  > This should always be added when writing a commandline script. It tells the OS to execute the code with the node.js version installed on the user's local system.
 
  
* Now import all the dependencies  (chalk, inquirer, figlet , gradient, chalk-animation ,createspinner)  
  >  Chalk- Colors the output text int he terminal   
  >  (There's an alternate it it valled color.js but that has some pretty strange bugs)

* Now let's test chalk-animation thats built on top of chalk that creates rainbow animations for us.
  <p align="center">
  <img src="https://github.com/JustARandomDude4/CmdLineGame/blob/master/ScreenShots/p2.PNG" width="300" title="Final Results">
</p>

*  inquirer.js -   it defines various different ways of collecting user Input.

* Now, create a askName() to get user's name.
* Now using inquirer, we create a multiple choice questions question()
* Now, we create respective handleanswer() function  to check the answer.
  > The spinner is used here to check the answers.
* Now, create the winner() 
>  Figlet-
>>  Figlet formats a message and send it to figlet, which is a popular  js implementation of a prg of c language.
>> It creates ASCII art for text.

## 🔗Final Result ✨✨✨💁‍♀️
<p align="center">
  <img src="https://github.com/JustARandomDude4/CmdLineGame/blob/master/ScreenShots/video.PNG" width="300" title="Final Results">
</p>

## 🔗Share your Game with the world via npx🧙🏽‍♀️🤹🏽‍♀️
* > Go to [<b>npm.js Website</b>](https://www.npmjs.com/) and make an account.
<p align="center">
  <img src="https://github.com/JustARandomDude4/CmdLineGame/blob/master/ScreenShots/login.PNG" width="300" title="Final Results">
</p>
 >  Go to your package.json and add an entry for bin
  '''
   "bin" : "/.index.js",
  '''
 > run   
  ```
  npm login
  npm publish
  ```
  <p align="center">
  <img src="https://github.com/JustARandomDude4/CmdLineGame/blob/master/ScreenShots/npmpublish.PNG" width="300" title="Final Results">
</p>

  ```
  npx @justarandomdude/commandlinegame
  ```
  
  
  ## Contact me 📲📤
  If u find  any errors in the code, or want to enquire on how to download, pls don't mind to ping me :))
 ```
 my gmail: (satwikakatragadda444@gmail.com)
 my Linkedin :https://www.linkedin.com/in/khs4/
 
```
__
