import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoomDetailsComponent } from '../room-details/room-details.component';
import { Observable } from 'rxjs';
import { RoomService } from '../room.service';
import { Room } from "../room";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
