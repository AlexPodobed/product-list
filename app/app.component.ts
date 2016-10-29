import {Component} from "@angular/core";

@Component({
    selector: 'pm-app',
    template: `
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">{{pageTitle}}</a>
            </div>
        
            <ul class="nav navbar-nav">
                <li><a [routerLink]="['/welcome']">Home</a></li>
                <li><a [routerLink]="['/products']">Product List</a></li>
               
              </ul>
          </div><!-- /.container-fluid -->
        </nav> 
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `
})

export class AppComponent{
    pageTitle: string = "Learning Angular2"
}