# Plentiful_Pantry

## [Description](#table-of-content)
Are you tired of ripping notes that ends with papercuts? Are you tired of punching holes to your list when you ticks out your item? Worry not! Plentiful Pantry, the editable shopping list, can ease your inconvience problems! 

This application will make your life easier by doing 3 things:
* Store the records of your products in your pantry and shopping lists.
* Update the names of your products and its quantities in your pantry and how many you needs in your shopping list
* Delete the product you don't want in the pantry or have in the shopping list.


## [Table of Content](#table-of-content)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Authors](#authors)
* [Packages](#packages)

## [Installation](#table-of-content)
Deployed on Heroku: [Click here!]()


## [Usage](#table-of-content)
When you click on the link of the application, you will be greeted with the login/sign up page. You <mark>must login</mark> to use Plentiful Pantry.

Once you login, you will see two forms you can fill out. For the first one you can type in one item you want to buy. After you finished typing, you can categorize them on the second form by clicking a drop-down list. Next, you click a "create" button to add your new item in the shopping list.

Inside shopping list, two default values (minimum quantity and quantity avaliable) are set to 1 and 0 respectively for the new items you updated.

* Minimum quantity is how much you want from the store.
* Quantity avaliable is how much you have in the pantry.

For example, you have one loaf of bread in a pantry but not planning to buy more. You can set minimum quantity to 0 and quantity avaliable to 1, since you are not buying more. Bread will be on the pantry list.

However, if you have 2 orange left and you want to buy 5 more, you can set minimum quantity to 5 and quantity avaliable to 2. Orange will be on the shopping list. 


## [Authors](#table-of-content)
| Front-end contribution  | Back-end contribution |
| ------------- | ------------- |
| Darryl Tillman  | Getnet Ali  |
| Erin Wallace  | Jean Suwatcharoenchai  |


## [Packages](#table-of-content)
* [Bulma](https://bulma.io/)
* [Handlebars.js](https://www.npmjs.com/package/express-handlebars)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Express-Session](https://www.npmjs.com/package/express-session)
* [Connect Session Store using Sequelize](https://www.npmjs.com/package/connect-session-sequelize)

[Back to the top](#plentiful_pantry)