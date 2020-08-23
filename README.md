# Playing with SWAPI

A playground for my Vue.js first steps, consuming from SWAPI with axios.

No requirements: just having a taste of the posibilities of routing, component reusability and composition.

The initial boilerplate was extracted from GeeksHubs Academy's 'Curso de Vue 2 para iniciarse en el mundo de las SPA' course by [Francisco Casero](https://github.com/Dygerydoo).

You can review the narrative of the processes by checking the closed PR's.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## SWAPI 404 ERRORS

When dealing with the Ships section I realized that some requests throw 404:

https://swapi.dev/api/starships/1/
https://swapi.dev/api/starships/4/

It seems that this is recurrent:

https://github.com/phalt/swapi/issues/96
https://github.com/phalt/swapi/issues/97

In order to finish the exercise at some point I decided to handle this lack of data in the items sheets with an error message. Maybe in the future I will return to this project and figure out the way to clean links to non existent data...but that's another story!