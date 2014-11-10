#Environmentsify (beta)

Javascript environments for Browserify. Simply create environment specific directories to swap out files for specific environments.

In gulp simple add the transform:

`.transform(environmentsify('development'))`

to build the project for the development environment, for example.

Files that have an adjacent environment directory with the same filename within it will be replaced when the project is build  