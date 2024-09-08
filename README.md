# Movies React Project

This project is a React application that interacts with an API to fetch and display information about movies, actors, and directors. Below are the exercises and tasks to be accomplished in this project.

## Exercices

### Exercice 1

Create a service to issue requests to the API to retrieve data. We need to be able to:

- Retrieve all movies by page
- Retrieve all actors or directors (Person) by page
- Get a Person by its ID

### Exercice 2

Create a React component to display the first 3 movies in a table. This table must have simple borders.

- Use the new component on the homepage.

### Exercice 3

- We want to get movies 3 by 3 with pagination.
- We need a button to load the next 3 movies.
- The button needs to disappear when all the movies have been retrieved.

### Exercice 4

- We would like to display actors and directors by name and not only their own IDs.

## API Documentation

You can find more details about the API using the following links:

- [API Documentation (Swagger UI)](http://ec2-15-237-160-101.eu-west-3.compute.amazonaws.com:8828/swagger-ui/index.html#/kata-controller/findPersonsPaginated)
- [API Docs JSON](http://ec2-15-237-160-101.eu-west-3.compute.amazonaws.com:8828/v3/api-docs)

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/Yosra1993/movies-app-react.git

2. Navigate to the project directory:
   ```bash
   cd movies-app-react

3. Install dependencies:
   ```bash
npm install

4. Run the project:
   ```bash
   npm start

   
Opens the app in development mode at http://localhost:3000. The page will reload when you make changes. You may also see any lint errors in the console.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

