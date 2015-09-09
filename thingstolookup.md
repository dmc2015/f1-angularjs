RegExp
RegExp.test
!$scope
Mocking
Making Directives
Promises (ex: then)
does angular have any special directives or built in features to deal with api's?

flux


flash cards

directives
application module
view
controller
model
mvc vs mvvc
name spacing system, why we don't use scope
asynchrounous
restapi
http requests
single binding - one way data binding : data is changed only on the backend and is presented to the user
double binding - two way data binding : data is changed on the front end or backend is rendered immediately and  the database is updated with any front end changes
-front end code on a input field updates the backend
and then the backend can update other places that utilize that data on the model. the backend must be updated prior to updating the front end
- is specified by the ng-model directive and allows the user to interact with a input field with in the directive. this directive updates the model which then updates the controller
Provider

Service - allow you to avoid replicating multiple controller modesls on the view, when multiple controllers exist in one view it can allow for data inconsistencies on the view. Can be used to organize and share code
across your app.
A service can be injected into any other service, directive, controller by stating it as a dependency, a new instance is not needed for each use.

Types of a Service
Service Service Type - more functional, returns functions and javascript objects directly
Service Factory Type - object oriented towards classes, returns instaniated javascript types and classes
Service Provider(?or Constant Service ?) Type -

Factory

Singletone

UML

Unit test
other types of tests
tdd
end to end testing

Singleton instantiation

dependency injection
injection
asynchrounous vs dynamic
notes

model lives in side the controller and the controller lives in side the module

ng-switch on
ng-swithch-when
