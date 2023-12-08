import { Component, OnInit , OnDestroy } from '@angular/core';
import { User } from '../User';
import { dataService } from '../data.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './app-user-list.component.html',
  styleUrls: ['./app-user-list.component.css']
})
export class AppUserListComponent implements OnInit , OnDestroy {

  //instead of any taken the user type.
  users: User[] = [];

  subscription : Subscription
  constructor(private dataService:dataService ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
   this.subscription = this.dataService.getUsers()
      .subscribe((data:User[]) => {
        this.users = data;
      },(error)=>{  // needs to handle error
        console.log(error);
      });
  }

  //needs to unsubscribe so that created the ngdestory life cylce hook
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  






}
