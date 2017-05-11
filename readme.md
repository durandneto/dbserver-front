Angular Gulp baseline build
=================

* integration with bower - to ensure all the latest dependencies are present
* Sass (with source maps)
* unit testing / integration testing with Karma, Jasmine and Chrome
* template cache pre-population - to prevent that each template causes one extra HTTP request
* jshint - the de-facto Javascript code quality checker
* browserify integration - for using synchronous import syntax and avoid maintaining config files with dependencies
* sprite generation 
* a development web server 

# Installation instructions

First make sure Gulp is globally installed, by running:

    npm install -g gulp

After cloning the project, run the following commands:

    npm install
    gulp
    gulp dev
    
This will start the development serve , it should be available at the following url:

http://localhost:8000/dist/index.html
    


