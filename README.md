# IssueViwer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.
The [Issue Service] *issues.service.ts* will connect to [Angular Issues](https://api.github.com/repos/angular/angular/issues) and collect the first 30 issues into the [Card Component] *card.component.ts*.
The [Card Component] *card.component.html* is build out of three parts.
1. A *fake* table header made out of divs and bootstrap cols
2. The ng-accordion component
3. The ng-bootstrap pagination component
 
Pages may be traversed using the pagination component.

## Requirements

`node.js`
`angular7`
Follow the steps in [Angular](https://angular.io/guide/quickstarti) to install both requierements.

## Development server

From the root directory *issueTracker* run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
