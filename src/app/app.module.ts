

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ConversationHeaderComponent } from './modules/Conversation/Components/conversation-header/conversation-header.component';
import { ConversationMainComponent } from './modules/Conversation/Components/conversation-main/conversation-main.component';
import { ConversationComposeResponseComponent } from './modules/Conversation/Components/conversation-compose-response/conversation-compose-response.component';
import { CandidatesComponent } from './Components/candidate-list/candidate-list.component';
import { CandidateInfoComponent } from './Components/candidate-info/candidate-info.component';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SentOnFilterPipe } from './Services/Sent-On-Filter.pipe';
import { ExchangeDatePipe } from './exchange-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SentOnFilterPipe,
    ConversationHeaderComponent,
    ConversationMainComponent,
    ConversationComposeResponseComponent,
    CandidatesComponent,
    CandidateInfoComponent,
    UserInfoComponent,
    ExchangeDatePipe,
    
  ],
  imports: [
    BrowserModule, HttpClientModule, MatToolbarModule,NgbModule, MatFormFieldModule,MatIconModule,BrowserAnimationsModule, FontAwesomeModule,FlexLayoutModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
