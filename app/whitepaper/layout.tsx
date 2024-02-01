import Footer from "@/components/landing/footer";
import NavBar from "@/components/navigation/bar";

export default function WhitepaperLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-[850px] mx-auto py-8 space-y-12 px-5">
      <NavBar />
      <section className="prose dark:prose-invert">{children}</section>
      <Footer />
    </main>
  );
}
