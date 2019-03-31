# IssueViwer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.
The [Issue Service] *issues.service.ts* will connect to [Angular Issues](https://api.github.com/repos/angular/angular/issues) and collect the first 30 issues into the [Card Component] *card.component.ts*.
The [Card Component] *card.component.html* is build out of three parts.
 Markup :  1. A *fake* table header made out of divs and bootstrap cols
          2. The ng-accordion component
          3. The ng-bootstrap pagination component
Pages may be traversed using the pagination component.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
