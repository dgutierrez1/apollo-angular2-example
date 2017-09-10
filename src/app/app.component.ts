import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { ApolloService } from './services/apollo/apollo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  list;
  constructor(private apolloService: ApolloService) {

  }
  ngOnInit() {
    this.apolloService.getQueryObservable().subscribe((data) => {
      console.log(data.data.memes);
      this.list = data.data.memes;
    });
  }
}
