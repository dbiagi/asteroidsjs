import { User } from "@app/ui/context/ContextTypes.ts";

let currentUser: User | null = null;

const storage = {
  set: (key: string, value: object) => {
    localStorage.setItem(`context_${key}`, JSON.stringify(value));
  },

  get: (key: string) => {
    const item = localStorage.getItem(`context_${key}`);

    return JSON.parse(item || "{}");
  },
};

class Context {
  public setCurrentUser(user: User) {
    currentUser = user;
    storage.set("currentUser", user);
  }

  public getCurrentUser() {
    return currentUser;
  }
}

export const context = new Context();
