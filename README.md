# take-challenge
## An API who integrates Blip's bot and GitHub api

## Features
- Get/ route to request repositories passing the owner's name and number of repositories to return
- Get/ route to connect with GitHub api filtering user, language repository (C#) and ordering by creation date
- Return an array of objects by the number that was requested.

## Tech

Take Challenge uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [Mocha] - Simple, flexible, fun JavaScript test framework for Node.js 
- [Axios] - Promise based HTTP client for the browser and node.js

## Installation

Take Challenge requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies.

```sh
yarn
```


## Development

Open your favorite Terminal and run these commands.

First:

```sh
yarn start:dev
```


(optional):

```sh
yarn test
```

## Consuming API

The parameters passed from the URL should be like demonstrated below.


```sh
baseURL/api/{ownerName}/{numberToReturn}
```
An exemple:

```sh
http://localhost:3333/api/felipejnsouza/5
```


## License

MIT