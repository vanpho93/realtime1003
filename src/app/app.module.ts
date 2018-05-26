import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { PipesComponent } from './pipes/pipes.component';
import { MyJsonPipe } from './my-json.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PipesComponent,
    MyJsonPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
