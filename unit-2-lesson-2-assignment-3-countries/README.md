## TODO
- Fix minification
  - use ng-anotate in gulp, before uglify()
- How to remove nested .then() in resolve block?
  - It's not about removing the then(), it's about abstracting some of the code
- Ensure tests work
  - Missing angular-mock, which provides convenience functions
  - Make sure karmaconf loads files in the right order, from the right location. Make sure you include all dependencies from main.js
  - In test spec, changes fn() to API.fn()

## Homework
- Move resolves into a service, test the service
