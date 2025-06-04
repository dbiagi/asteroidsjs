import { useState } from "react";

export interface LoginFormProps {
  onLogin: (data: LoginFormData) => void;
  username?: string;
}

type LoginFormData = {
  username: string;
};

export function LoginForm(props: LoginFormProps) {
  const [username, setUsername] = useState(props.username || "");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <form className="w-80" action={(e) => handleLogin(e, props.onLogin)}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="username">
            Player Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Enter
        </button>
      </form>
    </div>
  );
}

function handleLogin(data: FormData, onLogin: (data: LoginFormData) => void) {
  const username = data.get("username") as string;
  onLogin(new LoginFormData(username));
}
