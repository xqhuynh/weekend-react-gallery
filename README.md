# WEEKEND REACT GALLERY PROJECT

## Description

_Duration: 4 hours 

This project is intended to practice React's props and useState using Axios PUT and GET methods. Once the page is loaded, an array of photos will be displayed using an Axios GET method to retrieve the photos from the database. A photo is displayed with a "Love It" button and text will display after each click to indicate the "Love It" count. The number of 'Love It' is then stored in the database using an Axios PUT method. The database will reset back to default once the application is restarted, i.e. the number of "Love It' will reset to zero.

This project requires npm client and server to be ran simultaneously. 

## Structure
```
├── INSTRUCTIONS.md
├── README.md
├── package-lock.json
├── package.json
├── public
├── server
├── src
└── wireframes
```

- src folder - contains react components
- server folder - contains router, pool, and database

## Screen Shot

<img width="1400" alt="Screen Shot 2022-06-12 at 5 31 43 PM" src="https://user-images.githubusercontent.com/77410880/173256230-de453b55-ac1c-4ede-8a2a-b262196d2ec4.png">

<img width="1350" alt="Screen Shot 2022-06-13 at 9 09 16 PM" src="https://user-images.githubusercontent.com/77410880/173478607-f41facc9-0130-4c17-81b7-17dab7843e52.png">



### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)

## Installation

1. Run `install nodemon --global` in your terminal. This will install nodemon globally.
2. Run `npm install` in your terminal
3. Run `npm run server` in your terminal
4. Open a second terminal
5. Run `npm run client`

## Usage
This project is a great starter project to practice using React props and states. Axios GET and PUT methods are used here. A form can also be created to upload photo which will require Axious POST method. Another iteration can have the delete functionality using Axios DELETE method. 

## Built With

This project was built using Node.js, Axios and the React framework. 


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. 

## Support
If you have suggestions or issues, please email me at xqhuynh@gmail.com.
