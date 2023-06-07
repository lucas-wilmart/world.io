# World.io

This project is a small web application I developed in Typescript using React and styled-components.
Its purpose is to give users access to various informations concerning the countries of our world,
as well as a Quiz section in which you can test your knowledge in geography.

Data is provided by https://restcountries.com, country details also features embed map from Google
and a Wikipedia extract.

It's running on Vite and deployed on github pages. You should be able to test it out with the following URL:
https://lucas-wilmart.github.io/world.io

This project is currently in progress, see the Road Map section for more infos on future developments.

Disclaimer: I don't own world.io domain, I just don't have come up with a better name for this small side project yet.

## Installation

Recommendent node version: >= 19
Make sure yarn is installed

Create env file:

```
touch .env
```

Set variables:

```
VITE_BASE_URL=/world.io/ # OR WHATEVER LOCAL PATH YOU WANT TO USE
# Make sure to enabled Map Embed API
VITE_GOOGLE_API_KEY=[YOUR GCP API KEY]
```

Installing dependencies

```
yarn
```

Run in dev

```
yarn dev
```

## Demo

https://lucas-wilmart.github.io/world.io

## Authors

- [@lucas-wilmart](https://www.github.com/lucas-wilmart)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Roadmap

- Create my own Node.JS API to create more features

- Add Multi Languages (English and French)

- Add Dark Mode

- Develop other games in the Quizs section
