## Using `create-react-app` with React Router + Express.js

Following the React CommentBox tutorial:
https://facebook.github.io/react/docs/tutorial.html

## Development

Clone this repository:

```sh
git clone https://github.com/bmontalvo/react-tutorial.git
cd react-tutorial
```

Install dependencies:

```sh
npm install
```

Start the project at [`http://localhost:9000`](http://localhost:9000).

```sh
npm start
```

## Running with Docker

Be sure to install Docker and start a Docker-machine if necessary.

Let's create an image named `react-tutorial`:

```sh
docker build -t react-tutorial .
```

Finally, start a container named `react-tutorial-instance` at port `80`.

```sh
docker run -p 80:9000 --name react-tutorial-instance react-tutorial
```

## Testing

```sh
npm test
```
