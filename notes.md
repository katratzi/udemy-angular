
npm install -g @angular/cli

<!-- Create an angular project -->
ng new my-first-app --no-strict --standalone false --routing false

<!-- Install bootstrap -->
npm install --save bootstrap@3

<!-- Generate a component -->
<!-- shorthand  -->
ng generate component servers
ng g c servers 

<!-- use $event -->
<input type="text" class="form-control" (input)="onUpdateServerName($event)">