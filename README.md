# Shazamazon Carousel

Built using React, the Shazamazon Carousel component is one part of a larger Amazon clone. The component is able to render multiple item pictures, names, review statistics, and prices from items in the same category as the main item being viewed.  The carousel component is responsive to changes in the window's width.  While adjusting the window size, the page populates enough items to fit in the allotted space, updates the total page count, and maintains the current items on screen while the storage matrix is reconfigured. The coursousel component renders a loading gif while new data is being fetched.

## Stack

This component is built with the following technologies:

  - React (front-end)
  - Express (server)
  - MongoDB Atlas (Cloud, non-relational database)
  - Mongoose (server/database communication)
  - Amazon EC2 (deployment)

## Getting Started

1. Install npm packages:
```
npm install
```
2. Create a config.js file inside the ./database directory.
```
cd ./database
touch config.js
```

3. Decaire and export a variable that holds the uri string with the provided password to the Mongo database.
```
const uri = 'mongodb+srv://<password>:VUav3KFWtm7GT7bC@fec-carousel-xdbvm.mongodb.net/module-carousel?retryWrites=true&w=majority';

module.exports = { uri };

```

4. Start the server:
```
npm start
```


  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

