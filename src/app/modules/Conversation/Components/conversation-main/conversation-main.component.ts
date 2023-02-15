import { Component, ElementRef, Input, SimpleChanges, ViewChild,Renderer2 } from '@angular/core';
import { AllMessage } from '../../../../Model/all-message.model';
import { AllMessageService } from '../../../../Services/all-message.service';

@Component({
  selector: 'app-conversation-main',
  templateUrl: './conversation-main.component.html',
  styleUrls: ['./conversation-main.component.css']
})
export class ConversationMainComponent {
  @Input() conversationId: number = 0;
  @ViewChild("scrollTargetConverse", { static: false }) private scrollContainer!: ElementRef;

  message: AllMessage = new AllMessage(0, this.conversationId, '', '', new Date(), '');
  allmessages: AllMessage[] = [];
  response: string = '';
  private _searchText: string = '';
  // observer_chat: IntersectionObserver;
  constructor(private allmessageservice: AllMessageService, private el: ElementRef, private renderer: Renderer2) {
    // this.observer_chat = new IntersectionObserver(this.loadMore.bind(this));
    this.conversationId = 5;
    this.getAllMessages();

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['conversationId'].currentValue) {
      // trigger event
      this.conversationId = changes['conversationId'].currentValue;
      this.message.conversationId = this.conversationId;
      this.getAllMessages();
    }
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  onConversationSelected(conversationId: number) {
    this.conversationId = conversationId;
    this.getAllMessages();
  }
  getAllMessages() {
    this.allmessageservice.getMessageById(this.conversationId)
      .subscribe(data => {
        if (Array.isArray(data) && data.length > 0) {
          this.allmessages = data;
          this.scrollToBottom();
        } else {
          console.log("Data received from the API does not match the expected structure and format.");
        }
      }, error => {
        console.log(error);
      });
  }
  private scrollToBottom() {
   // this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    //this.renderer.setProperty(this.scrollContainer.nativeElement, 'scrollTop', this.scrollContainer.nativeElement.scrollHeight);
    this.renderer.setProperty(
      this.scrollContainer.nativeElement,
      'scrollTop',
      this.scrollContainer.nativeElement.scrollHeight
    );

  }
  submitResponse() {
    this.message.message = this.response;
    this.message.conversationId = this.conversationId;
    this.message.fromUser = "Recruiter";
    this.message.messageStatus = "Sent";
    this.message.sentOn = new Date();

    this.allmessageservice.createMessage(this.message).subscribe(
      (response) => {
        this.response = '';
        console.log('Message sent successfully:', response);
        this.getAllMessages();
      },
        (error) => {
          console.error('Error sending message', error);
        }
      );
    // your code to submit the response
  }
}
