import { Component, OnInit } from '@angular/core';

interface datatype {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss'],
})
export class MainAppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  color: string[] = ['pink', 'aqua'];
  name: string = '';
  listtodo: datatype[] = [];
  listdone: datatype[] = [];
  id: number = 1;
  err: string = '';

  addenter() {
    if (this.name) {
      this.listtodo.push({
        id: this.id,
        name: this.name,
        completed: false,
      });
      this.id += 1;
      this.name = '';
      this.err = '';
    } else {
      this.err = 'This input can not be blank';
    }
  }
  add() {
    if (this.name) {
      this.listtodo.push({
        id: this.id,
        name: this.name,
        completed: false,
      });
      this.id += 1;
      this.name = '';
      this.err = '';
    } else {
      this.err = 'This input can not be blank';
    }
  }

  changelist(id: number) {
    const index: number = this.listtodo.findIndex((object) => {
      return object.id === id;
    });
    this.listdone.push(this.listtodo[index]);
    this.listtodo.splice(index, 1);
  }

  removelist(id: number) {
    const index: number = this.listtodo.findIndex((object) => {
      return object.id === id;
    });
    this.listtodo.splice(index, 1);
  }

  recover(id: number) {
    const index: number = this.listdone.findIndex((object) => {
      return object.id === id;
    });
    this.listtodo.push(this.listdone[index]);
    this.listdone.splice(index, 1);
  }

  removedone(id: number) {
    const index: number = this.listdone.findIndex((object) => {
      return object.id === id;
    });
    this.listdone.splice(index, 1);
  }
}
