import { HeroSection } from "@/components/hero-section";
import { SolutionsSection } from "@/components/solutions-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SolutionsSection />
    </main>
  );
}