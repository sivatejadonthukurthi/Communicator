import { CandidateReq } from "./candidate-req.model";
import { Conversations } from "./conversations.model";

export class CandidateList {
  lastName: string;
  firstName: string;
  email: string;
  candidateId: number;
  phoneNumber: string;
  userVsCandidateReqs: CandidateReq[];
  conversation: Conversations;

  constructor(
    lastName: string,
    firstName: string,
    email: string,
    candidateId: number,
    phoneNumber: string,
    userVsCandidateReqs: CandidateReq[],
    conversation: Conversations
  ) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.candidateId = candidateId;
    this.phoneNumber = phoneNumber;
    this.userVsCandidateReqs = userVsCandidateReqs;
    this.conversation = conversation;
  }
}
