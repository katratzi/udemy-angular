
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


<!-- @Input - to make a custon bindable property -->
//So in the child class, define the object
export class ServerElementComponent {
  @Input() element: {
    type: string, name: string, content: string,
  };
}
// alias or external name
@Input('srvElement')

// and in the parent html
<app-server-element *ngFor="let serverElement of serverElements" [element]="serverElement"></app-server-element>


<!-- @Output - create our own custom bindable event -->

// in the child component create the event and output it
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })

  }
}

// listen from the parent like so
<app-cockpit (serverCreated)="onServerAdded($event)" (blueprintCreated)="onBlueprintAdded($event)">

// and handle in parent like so
onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }


  <!-- Local references in templates -->
  // instead of using the ngModel, can use a local reference
  <input type="text" class="form-control" #serverNameInput>
  // this passes the html element, so for the value we'd use
  onAddServer(nameInput) {
    console.log(nameInput.value);
  }

<!-- ViewChild -->
// get access to the element in the template we're in from...
@ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef
// use with nativeElement
serverContent: this.serverContentInput.nativeElement.value

<!-- ng-content -->
All content between our custom tags is removed by default. 
So this wouldn't work in the parent
<app-server-element *ngFor="let serverElement of serverElements" [element]="serverElement">
    <p>
        <strong *ngIf="serverElement.type === 'server'" style="color: red">{{ serverElement.content }}</strong>
        <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
    </p>
</app-server-element>
// if we add ng-content in though, it tells it where to place this in the child
<div class="panel panel-default">
    <div class="panel-heading">{{ element.name }}</div>
    <div class="panel-body">
        <ng-content></ng-content> // put it here please
    </div>
</div>

<!-- ContentChild -->
// if we're passing elements down with ng-content and we
// want to access them use...
 
<p #contentParagraph> in parent html

and in child ts
 @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef  



 <!-- custom directive -->
@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    // use the private shortcut which automatically
    // gives us a property
    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }
}

// use simply with
<p appBasicHighlight>Style me with basic directive</p>

<!-- host listener - use any events even your own -->
// add in directive
@HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderder.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
  }

  <!-- Host binding - access any property in directive -->
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'
  // then simply...
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'blue'
  }

<!-- Services -->
// all we need to create a service
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}
// use by importing..
import { LoggingService } from '../logging.service';

@Component({
  ...
  providers: [LoggingService] // add provider
})
export class AccountComponent {
  ...
  // use a constructor, and now you can use it!
  constructor(private logginService: LoggingService) { }

  // alternative can use...
  constructor() {
    this.loggingService = inject(LoggingService);
}

<!-- Hierarchy Services -->
When we create a service, it can pass down that instance to it's children in the hierarchy, but they can overwritten can the children can create their own.  To avoid, use the same syntax but OMIT the class in the providers array of the children. E.g.
providers: [LoggingService, AccountsService] -> providers: [LoggingService]

Put the service in the AppModule for it to be everywhere

To provide a service *within* a service, need to add @Injectable() to where it will accept the service. 

// alternative syntax for a global service
@Injectable({providedIn: 'root'})
export class MyService { ... }
  
