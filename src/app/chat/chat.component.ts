import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';

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
  socket = io('http://localhost:3000');
  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.messages.push(this.txtMessage);
    this.txtMessage = '';
  }
}
