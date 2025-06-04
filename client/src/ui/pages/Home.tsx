import { LoginForm } from "@app/ui/components/forms/LoginForm.tsx";
import { LoginFormData } from "@app/ui/components/forms/LoginForm.tsx";

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">AsteroidJS</h1>
      <p className="text-lg">
        This is the main entry point of the application.
      </p>
      <div>
        <LoginForm
          onLogin={(data: LoginFormData) => console.log(data.username)}
        ></LoginForm>
      </div>
    </div>
  );
}
