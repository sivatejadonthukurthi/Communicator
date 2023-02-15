import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit,EventEmitter } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConversationHeaderComponent } from './modules/Conversation/Components/conversation-header/conversation-header.component';
import { MobilityService } from './Services/mobility.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  title = 'ReqChatUI';
  selectedConversationId: number = 0;
  isMobile: boolean = false;
  
    constructor(private mobilityService: MobilityService, private el: ElementRef) {
    //window.addEventListener('resize', (event) => {
    //  this.onResize();
    //});
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (window.innerWidth <= 980) {
      this.mobilityService.changeIsMobile(true);
      this.mobilityService.changeShowCandidateList(true);
      this.mobilityService.changeShowCandidateDetails(false);
      this.mobilityService.changeShowConversation(false);
    } else {
      this.mobilityService.changeIsMobile(false);
    }
  }
  onConversationSelected(id: number) {
    this.selectedConversationId = id;
  }
  ngOnInit() {
    this.mobilityService.currentIsMobile.subscribe(value => {
      this.isMobile = value;
    });
  }
}


