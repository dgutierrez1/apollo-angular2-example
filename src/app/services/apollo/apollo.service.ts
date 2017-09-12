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
const addMutation = gql`
mutation add($title: String!) {
  add(title: $title) {

    title
    id
    img
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
  createItem(addTitle: string) {
    this.apollo.mutate({
      mutation: addMutation,
      variables: {
        title: addTitle
      }
    }).subscribe(({ data }) => {
      //alert('got data' + data);
    }, (error) => {
      alert('there was an error sending the query' + error);
    });
  }

}
