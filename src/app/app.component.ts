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

  addManager = {
    visible: false,
    meme: {
      title: ''
    }
  }

  list;
  constructor(private apolloService: ApolloService) {

  }
  ngOnInit() {
    this.apolloService.getQueryObservable().subscribe((data) => {
      console.log(data.data.memes);
      this.list = data.data.memes;
    });
  }
  showAddPanel() {
    this.addManager.visible = true;
  }
  addItem() {
    // alert(this.addManager.meme.title);
    if (this.addManager.meme.title !== '') {

      this.apolloService.createItem(this.addManager.meme.title);
      this.apolloService.getQueryObservable().refetch();
      this.addManager.meme.title = '';
    }
  }

}
