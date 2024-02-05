import Navbar from "@/components/dash/navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    return redirect("/");
  }

  return (
    <div className="max-w-screen-xl mx-auto py-8 space-y-8 px-5">
      <Navbar />
      {children}
    </div>
  );
}
