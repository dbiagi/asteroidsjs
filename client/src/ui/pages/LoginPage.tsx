import { context } from "@app/ui/context/Context.ts";
import { useNavigate } from "react-router";
import { useState } from "react";

function doLogin(data: FormData) {
  const username = data.get("username") as string;
  context.setCurrentUser({ username });
}

export function LoginPage() {
  const [username, setUsername] = useState("");
  const navigator = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">AsteroidJS</h1>
      <p className="text-lg">
        This is the main entry point of the application.
      </p>
      <div>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Login</h1>
          <form
            className="w-80"
            action={(e: FormData) => {
              doLogin(e);
              navigator("/play");
            }}
          >
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="username"
              >
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
      </div>
    </div>
  );
}
