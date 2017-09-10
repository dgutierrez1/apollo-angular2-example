import { ApolloService } from './services/apollo/apollo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://192.168.56.102:8080'
  })
});

// const client = new ApolloClient();


export function provideClient(): ApolloClient {
  return client;
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    ApolloModule.forRoot(provideClient)
  ],
  providers: [ApolloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
