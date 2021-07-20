export interface Interviewer {
  askQuestions(): string;
}

export class Developer implements Interviewer {
  public askQuestions() {
    return 'Asking about design patterns!';
  }
}

export class CommunityExecutive implements Interviewer {
  public askQuestions() {
    return 'Asking about community building!';
  }
}
