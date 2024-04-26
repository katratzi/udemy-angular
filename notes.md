
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

<!-- ngIf -->
<p *ngIf="serverCreated; else noServer">Server was created, server name is {{
    serverName }}</p>
<ng-template #noServer>
    <p>No server was create</p>
</ng-template>

<!-- ngStyle - can ommit '' with camelCase version -->
<p [ngStyle]="{'background-color': red}">Hello Style</p>
<p [ngStyle]="{backgroundColor: blue}">Hello Style</p>

<!-- ngClass - class: followed by condition -->
<p [ngClass]="{online: serverStatus === 'online' }">
    Server with ID {{ serverId }} is {{ getServerStatus() }}
</p>

<!-- ngFor - second let to get index-->
<app-server *ngFor="let server of servers"></app-server>
<app-server *ngFor="let server of servers; let i of index"></app-server>
<ul> // clicks is an array here
    <li *ngFor="let number of clicks" [ngClass]="{fifthElement: number >= 4}">{{number}}</li>
</ul>

<!-- image src with a url -->
src="{{recipe.imagePath}}" 
[src]="recipe.imagePath"
