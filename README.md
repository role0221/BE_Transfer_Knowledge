# BE_Transfer_Knowledge

## Stack

```bash
Language: Typescript
Framework: Nest.js 
DataBase: Postgresql
API-Documentation: Swagger  # use Swagger for testing api or you can use postman
other: ....
``` 

## Installation

```bash
$ yarn install
```

## create file : .env.development

```bash
# Set Env.
APP_PORT=3800
APP_TITLE="Jo & Gata"
NODE_ENV=development
APP_DESCRIPTION='For Transfer Knowledge'

DB_PORT=5432
DB_HOST=localhost
DB_USER=postgres
DB_PASS=123456789
DB_NAME=postgres
```

## Run Docker DB

```bash
docker run --name my_postgres -e POSTGRES_PASSWORD=123456789 -p 5432:5432 -d postgres

```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```