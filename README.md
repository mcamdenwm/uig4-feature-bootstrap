# UIG4 Feature Bootstrap

Included in this repo is an example of a Dashboard, Create Modal, and Manage drawer. 

## Setup

### Install dependencies with yarn

`yarn`

### Provide credentials

`cp ./credentialsTemplate.js ./credentials.js`

Credentials are required to connect to the dev gateway, but for security reasons credentials cannot be included within the repo. After copying the template file, modify it to provide a user and pass.

## Start the webpack dev server

`yarn start`

This will start the dev server for packages accessible at `http://localhost:4005`.

## Start good_job server

`yarn start:api`

This will start the good_job server. If you have `good_job` installed globally (which is recommended) you can instead just call `good_job`.

## Linting

`yarn lint`

Linting is configured through ESLint.