import { Component } from '@angular/core';

@Component({
  selector: 'app-conversation-header',
  templateUrl: './conversation-header.component.html',
  styleUrls: ['./conversation-header.component.css']
})

export class ConversationHeaderComponent {
  searchActive = false;
  searchTerm: string | undefined;
  focusSearch = '';
  searchclicked = false;
  resultLeft = 0;
  resultRight = 0;
  searchItemCount: number = 0;
  isMobile: boolean = false;


  focusConversation() {
    this.searchclicked = true;
    const elements = document.querySelectorAll('.focuslist')!;
    if (this.focusSearch.trim() !== '') {
      Array.from(elements).forEach((element, index) => {
        const text = element.textContent!;
        if (text.toLowerCase().indexOf(this.focusSearch.toLowerCase()) > -1) {
          element.classList.add('highlighted');
        }
      });
    }
    this.searchItemCount = document.querySelectorAll('.highlighted').length;
    if (this.focusSearch !== '' && this.searchItemCount > 0) {
      this.resultRight = this.searchItemCount - 1;
      const element = document.querySelector('.highlighted');
      this.searchConversation();
    }
  }

  searchPreviousItem() {
    this.resultLeft = this.resultLeft - 1;
    this.resultRight = this.resultRight + 1;
    this.searchConversation();
  }

  searchNextItem() {
    this.resultLeft = this.resultLeft + 1;
    this.resultRight = this.resultRight - 1;
    this.searchConversation();
  }

  clearSearch() {
    this.resultLeft = 0;
    this.resultRight = 0;
    this.searchItemCount = 0;
  }

  searchConversation() {
    const container = document.querySelector('.detailChatul')!;
    const scrollTo = document.querySelector(`.detailChatul .highlighted:eq(${this.resultLeft})`)!;
    container.scrollTop =
      scrollTo.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop;
  }

  getCandidates() {

  }
}
