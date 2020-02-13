# TODO List

A simple TODO List to help you keep track of your day-by-day tasks.

## Installation 
### 1. Install Node and npm
#### Ubuntu: 

Follow the steps in this [link](https://github.com/nodesource/distributions/blob/master/README.md) to install npm and node.

#### Windows: 

Follow the steps in this [link](https://nodejs.org/en/download/) to install npm and node.

#### MacOS:

```bash
bew install node
```


### 2. Install MySQL

#### Ubuntu: 

Follow the steps in this [link](https://support.rackspace.com/how-to/installing-mysql-server-on-ubuntu/) to install MySQL.

#### Windows: 

Follow the steps in this [link](https://dev.mysql.com/downloads/installer/) to install MySQL.

#### MacOS:

```bash
bew install node
```

### 3. Install sequelize-cli

```bash
npm install -g sequelize-cli
```

## How to run

First you need to go to mysql terminal and create a database with the name 'todo_list_db'.

Then you need to configure the db config file that can be found at path "api/db/config/config.js".

At last, run the commands bellow:

```bash
npm install

npm run migrate

npm start
```
