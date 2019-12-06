import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl()
  });
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  submitName() {
    this.userService.setUser(this.profileForm.get('name').value);
    this.router.navigateByUrl('chat');
  }

}
