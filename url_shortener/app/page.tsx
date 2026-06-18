import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import UrlForm from "@/components/home/UrlForm";
import ShortenedCard from "@/components/home/ShortenedCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="px-8">
        <Hero />

        <UrlForm />

        <ShortenedCard />
      </main>
    </>
  );
}