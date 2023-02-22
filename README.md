<h1 align="center">E-Commerce Database!</h1>
<p align="center">Primary Tools</p>
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/-sequelize-green" />
    <img src="https://img.shields.io/badge/-inquirer-red" >
    <img src="https://img.shields.io/badge/mySQL-blue"  />
</p>

## Description
Creating a database for e-commerce transactions that utilizes GET, POST, PUT, and DELETE requests efficiently and effectively.
<br>
<br>
The following examples show the functionality of each request. <br>
- GET (collect ALL data by category, product, or tag) :
![13-orm-homework-demo-01](https://user-images.githubusercontent.com/111401066/220498526-18510b56-60c5-4049-aa05-6098c02e6294.gif)

- GET (collect INDIVIDUAL data by catergory, product, or tag) :
![13-orm-homework-demo-02](https://user-images.githubusercontent.com/111401066/220499094-12711abc-95de-4d42-a1ba-65eaa04ff0af.gif)

- POST/PUT/DELETE:
![13-orm-homework-demo-03](https://user-images.githubusercontent.com/111401066/220499239-15b75846-e8e0-4cdf-80ae-716645be8829.gif)


## Acceptance Critera
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
(click for more)
</summary>

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Walkthrough
1. Ensure you have a .ENV file located within your reporsitory that contains the DB name, DB user, and DB password
```
DB_NAME='ecommerce_db'
DB_USER='{your username}'
DB_PW='{your password}'
``` 
2. Create Schema and Seed your Data using mysql
3. 