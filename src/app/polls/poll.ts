import { Vote } from './vote';
export interface Poll {
  _id: string;
  title: string;
  createdOn: string;
  options: string[];
  votes: Vote[];
}
