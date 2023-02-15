export class AllMessage {
  messageId: number;
  conversationId: number;
  message: string;
  fromUser: string;
  sentOn: Date;
  messageStatus: string;

  constructor(
    messageId: number,
    conversationId: number,
    message: string,
    fromUser: string,
    sentOn: Date,
    messageStatus: string
  ) {
    this.messageId = messageId;
    this.conversationId = conversationId;
    this.message = message;
    this.fromUser = fromUser;
    this.sentOn = sentOn;
    this.messageStatus = messageStatus;
  }
}
