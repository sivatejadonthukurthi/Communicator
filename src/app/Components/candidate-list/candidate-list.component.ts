
import { Component, ElementRef, EventEmitter, NgModule, SimpleChanges,Output } from '@angular/core';
import { CandidateList } from '../../Model/candidates.model';
import { CandidatesService } from '../../Services/candidates.service';
import { DatePipe } from '@angular/common';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ExchangeDatePipe } from '../../exchange-date.pipe.js';
import { MobilityService } from '../../Services/mobility.service';
@Component({
  selector: 'app-candidate-list',  
  templateUrl: './candidate-list.component.html',
  providers: [{ provide: MatFormFieldControl, useExisting: CandidatesComponent }],
  styleUrls: ['./candidate-list.component.css']
})

export class CandidatesComponent {
  candidates: CandidateList[]=[] ;
  _searchText: string = '';
  pageNumber = 1;
  pageSize = 10;
  observer: IntersectionObserver;
  @Output() conversationId = new EventEmitter<number>();
  isMobile: boolean=false;
  constructor(private candidatesService: CandidatesService, private mobilityService: MobilityService,  private el: ElementRef) {
    this.observer = new IntersectionObserver(this.loadMore.bind(this));
    this.getCandidates();
  }
  ngOnInit() {
    this.mobilityService.currentIsMobile.subscribe(value => {
      this.isMobile = value;
    });
  }
  ngAfterViewInit() {
    this.observer.observe(this.el.nativeElement.querySelector('#scrollTarget'));
  }
  selectConversation(id:number) {
    this.conversationId.emit(id);
  }
  getCandidates() {
    //this.candidatesService.getTopCandidates(this.pageNumber, this.pageSize, this.searchText)
    //  .subscribe(data => {
    //    this.candidates = [...this.candidates, ...data];
    //  });
    this.candidatesService.getTopCandidates(this.pageNumber, this.pageSize, this._searchText)
      .subscribe(data => {
        //make sure data received matches the structure and format expected
        if(Array.isArray(data) && data.length>0 ){
          this.candidates = data.map(c => new CandidateList(c.lastName, c.firstName, c.email, c.candidateId, c.phoneNumber, c.userVsCandidateReqs, c.conversation));

        }else{
          console.log("Data received from the api does not match the expected structure and format.")
        }
      }, error => {
        console.log(error);
      });
  }

  loadMore(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.pageNumber++;
        this.getCandidates();
        this.observer.unobserve(entry.target);
      }
    });
  }

  filterCandidate() {
    this.getCandidates();

  }  
}
