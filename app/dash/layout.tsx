import Navbar from "@/components/dash/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen-xl mx-auto py-8 space-y-8 px-5">
      <Navbar />
      {children}
    </div>
  );
}
