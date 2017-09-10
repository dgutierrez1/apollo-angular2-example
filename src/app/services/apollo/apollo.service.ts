import { ApolloQueryObservable } from 'apollo-angular/build/src';
import { Observable } from 'apollo-client/util/Observable';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';



const memes = gql`
query {
  memes {
    title
    img
    src
    img
    score
  }
}
`;

interface QueryResponse {
  memes
  loading
}


@Injectable()
export class ApolloService {

  query: ApolloQueryObservable<QueryResponse>;

  constructor(private apollo: Apollo) {
    this.query = this.apollo.watchQuery<QueryResponse>({
      query: memes
    })
   }

  getQueryObservable() {
    return this.query;
  }

}
