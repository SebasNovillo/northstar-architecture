import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { SelectedProjects } from "@/components/home/SelectedProjects";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="relative bg-[#171716]">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <SelectedProjects />
      </main>
    </div>
  );
}
