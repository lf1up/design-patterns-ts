import { Interviewer, Developer, CommunityExecutive } from './interviewer';

export abstract class HiringManager {
  // Factory method
  protected abstract makeInterviewer(): Interviewer;

  public takeInterview(): string {
    const interviewer = this.makeInterviewer();
    return interviewer.askQuestions();
  }
}

export class DevelopmentManager extends HiringManager {
  protected makeInterviewer() {
    return new Developer();
  }
}

export class MarketingManager extends HiringManager {
  protected makeInterviewer() {
    return new CommunityExecutive();
  }
}
