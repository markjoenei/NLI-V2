import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Fortune100 from "@/components/Fortune100";
import Features from "@/components/Features";
import LovedByUsers, { FAILURE_LIST_BODY } from "@/components/LovedByUsers";
import Skills from "@/components/Skills";
import FAQ from "@/components/FAQ";
import ReadyToTry from "@/components/ReadyToTry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <LovedByUsers
          eyebrow="The reality"
          heading={
            <>
              Most AI Projects Fail.
              <br />
              <span className="editorial text-[#989898]">Here&apos;s Exactly Why.</span>
            </>
          }
          body={FAILURE_LIST_BODY}
          showCTA={false}
          showCards={false}
        />
        <LovedByUsers theme="light" showCTA={false} />
        <Fortune100 />
        <Skills />
        <FAQ />
        <ReadyToTry />
      </main>
      <Footer />
    </>
  );
}
