import { discoveryCallSteps } from "@/lib/constants";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedStagger";
import { SectionIntro } from "@/components/content/SectionIntro";

export function DiscoveryCallSteps() {
  return (
    <>
      <SectionIntro
        label="What to Expect"
        title="Your discovery call"
        delay={0}
      />
      <AnimatedStagger className="mt-8 grid gap-6 md:grid-cols-3">
        {discoveryCallSteps.map((item) => (
          <AnimatedItem key={item.step} variant="scaleIn">
            <div className="rounded-2xl border border-warm-nude bg-cream p-6">
              <p className="text-sm text-soft-gold">{item.step}</p>
              <h3 className="mt-2 font-serif text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-mocha">{item.description}</p>
            </div>
          </AnimatedItem>
        ))}
      </AnimatedStagger>
    </>
  );
}
