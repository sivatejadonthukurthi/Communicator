
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllMessage } from '../Model/all-message.model';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class AllMessageService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllMessages() {
    return this.http.get<AllMessage[]>(`${this.baseUrl}api/allmessages`);
  }

  getMessageById(id: number) {
    return this.http.get<AllMessage>(`${this.baseUrl}api/Conversation/${id}`);
  }

  createMessage(allMessage: AllMessage) {
    return this.http.post(`${this.baseUrl}api/Conversation`, allMessage);
  }

  updateMessage(allMessage: AllMessage) {
    return this.http.put(`${this.baseUrl}api/Conversation/${allMessage.messageId}`, allMessage);
  }

  deleteMessage(id: number) {
    return this.http.delete(`${this.baseUrl}api/allmessages/${id}`);
  }
}
