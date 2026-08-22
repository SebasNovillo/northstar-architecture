import { Hero } from "@/components/home/Hero";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="relative bg-[#171716]">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
