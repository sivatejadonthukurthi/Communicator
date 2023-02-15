import { AllMessage } from "./all-message.model";

export class Conversations {
  conversationId: number;
  unReadMessageCount: number;
  message: string;
  sentOn: Date;
  displayDate: string;
  allMessages: AllMessage[];

  constructor(
    conversationId: number,
    unReadMessageCount: number,
    message: string,
    sentOn: Date,
    
    allMessages: AllMessage[]
  ) {
    this.conversationId = conversationId;
    this.unReadMessageCount = unReadMessageCount;
    this.message = message;
    this.sentOn = sentOn;
    this.allMessages = allMessages;
    this.displayDate = this.getDisplayDate(sentOn);
  }
  getDisplayDate(sentOn: Date): string {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (sentOn.toDateString() === today.toDateString()) {
      return sentOn.toLocaleTimeString();
    } else if (sentOn.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else if (sentOn.getTime() > today.getTime() - 7 * 24 * 60 * 60 * 1000) {
      return sentOn.toLocaleDateString('en-US', { weekday: 'short' });
    } else {
      return sentOn.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  }
}

