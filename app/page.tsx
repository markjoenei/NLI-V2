import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Fortune100 from "@/components/Fortune100";
import Features from "@/components/Features";
import LovedByUsers, { FAILURE_LIST_BODY } from "@/components/LovedByUsers";
import IntelligenceStack from "@/components/IntelligenceStack";
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
        <LovedByUsers
          theme="light"
          body={<IntelligenceStack />}
          showCTA={false}
          showCards={false}
        />
        <FAQ
          theme="dark"
          headingTop="Enterprise-Grade from Day One."
          headingBottom="Not After You've Outgrown Us."
          items={[
            {
              q: "Integrates with your stack — doesn't replace it",
              a: "CRM, ERP, cloud infrastructure, data warehouses. We connect the intelligence layer to what you already own.",
            },
            {
              q: "Scales without breaking",
              a: "Ten automations or ten thousand. The architecture holds.",
            },
            {
              q: "Security and compliance built in",
              a: "Not bolted on afterward. Enterprise security is a starting point, not an upgrade.",
            },
            {
              q: "Visibility at every level",
              a: "Your team sees what's running. Your leadership sees what it's producing. No black boxes.",
            },
          ]}
        />
        <Fortune100 />
        <Skills />
        <FAQ />
        <ReadyToTry />
      </main>
      <Footer />
    </>
  );
}
