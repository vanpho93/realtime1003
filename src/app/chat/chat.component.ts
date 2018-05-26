import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  txtMessage = '';
  messages: string[] = [
    'Hi there!',
    'Hello',
    'How are you?'
  ];
  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.messages.push(this.txtMessage);
    this.txtMessage = '';
  }
}
