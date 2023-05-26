import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from "@angular/common";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userData: any;
  
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private location: Location) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.getUserDetail(userId);
  }

  getUserDetail(userId: any) {
      this.http.get(`http://localhost:3000/posts/${userId}`)
      .subscribe((data: any) => { 
        console.log(data);
       
       this.userData = data;
       
      });
  }

  goBack() {
    this.location.back();
  }


}
