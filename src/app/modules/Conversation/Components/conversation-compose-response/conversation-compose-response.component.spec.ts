import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationComposeResponseComponent } from './conversation-compose-response.component';

describe('ConversationComposeResponseComponent', () => {
  let component: ConversationComposeResponseComponent;
  let fixture: ComponentFixture<ConversationComposeResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationComposeResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationComposeResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
