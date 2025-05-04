import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="h-screen w-100 grid place-content-center">
      <SignUp />
    </div>
  );
}
