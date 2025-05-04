import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="h-screen w-100 grid place-content-center">
      <SignIn />
    </div>
  );
}
