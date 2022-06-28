# Petsagram

## Description:

As a pet owner i want to display my pets to the world and be able to show all my pictures of them. Here comes PETSAGRAM with the ability to show them theres also the need to be able to comment and like them.

As a user i want to be able to comment and like pictures of other users as well.

Sign up and start posting.

Deployed Link:


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Gif Demo](#gif-demo)
* [Code Snippets](#code-snippets)
* [Credits](#credits)
* [Contributors](#contributors)
* [License](#license)

## Installation
The following will be the procedure for installing the application and getting the server run
- Start by cloning the repository 
- Next perform a npm install in the terminal
- Then, create a dotenv file input the 
DB_NAME='petsfeed_db', DB_USER='your_user', DB_PASSWORD='your_password'
CLOUDINARY_NAME = 'cloudinary_name', API_KEY = 'api_key', API_SECRET = 'api_secret'
- Now,
- Then, seed the database using mysql2
mysql -u root -p
mysql password
SOURCE db/schema.sql
- Once that is all completed, in the terminal start the server
node server.js 

## Usage

The following application allows the user to:
-
-
-
-


## Gif Demo

<img src="" width=900px>

## Code Snippets

## Credits

| Technologies used|Front-end|Back-end|
| -|-:| -:|
||Handlebars|![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)|
||![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)|![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)|
||![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)|![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)|
||Fetch|![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)|
|||![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)|
|||Session|
|||Cookie|
|||Handlebars|
|||Node fetch|--


| API used| 
| ------------- |
| []()|

| Third Party Libraries|
| ------------- |
| [Boostrap](https://getbootstrap.com/) | 
| [cloudinary]()

## Contributors
* Alex Canez [LinkedIn]() | [GitHub]()
* Shek Chun Lee [LinkedIn]() | [GitHub]()
* Tess Shearer [LinkedIn]() | [GitHub]()

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2022 Alex Canez, Shek Chun Lee, Tess Shearer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.