import { Vote } from './vote';
export class Poll {
  _id: string;
  title: string;
  createdOn: string;
  options: string[];
  votes: Vote[];
}
