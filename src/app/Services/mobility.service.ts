import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobilityService {

  private isMobile = new BehaviorSubject(false);
  currentIsMobile = this.isMobile.asObservable();

  private showCandidateList = new BehaviorSubject(false);
  currentShowCandidateList = this.showCandidateList.asObservable();

  private showConversation = new BehaviorSubject(false);
  currentShowConversation = this.showConversation.asObservable();

  private showCandidateDetails = new BehaviorSubject(false);
  currentShowCandidateDetails = this.showCandidateDetails.asObservable();

  constructor() { }

  changeIsMobile(isMobile: boolean) {
    this.isMobile.next(isMobile);
  }

  changeShowCandidateList(showCandidateList: boolean) {
    this.showCandidateList.next(showCandidateList);
  }

  changeShowConversation(showConversation: boolean) {
    this.showConversation.next(showConversation);
  }

  changeShowCandidateDetails(showCandidateDetails: boolean) {
    this.showCandidateDetails.next(showCandidateDetails);
  }

}

