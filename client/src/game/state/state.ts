export type User = {
  id: string;
  username: string;
};

export type StageSize = {
  width: number;
  height: number;
};

export type State = {
  currentUser?: User;
  stageSize: StageSize;
};

const state: State = {};

export class StateManager {
  getCurrentUser(): User | null {
    return state.currentUser;
  }

  setCurrentUser(user: User | null): void {
    state.currentUser = user;
  }

  getStageSize(): StageSize {
    return state.stageSize;
  }

  setStageSize(stageSize: StageSize): void {
    state.stageSize = stageSize;
  }
}

export const stateManager = new StateManager();
