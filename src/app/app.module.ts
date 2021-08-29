import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { RoomListComponent } from './room-list/room-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRoomComponent,
    RoomDetailsComponent,
    UpdateRoomComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
