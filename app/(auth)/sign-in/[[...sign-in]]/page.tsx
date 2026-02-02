import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <SignIn
        appearance={{
          elements: {
            card: "bg-slate-800 border border-slate-700",
            footerAction: "text-slate-400",
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
          },
        }}
      />
    </div>
  );
}
