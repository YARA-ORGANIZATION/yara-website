import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import IntroAnimation from "@/components/IntroAnimation";
import PageTransition from "@/components/PageTransition";

export default function WebLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <IntroAnimation />
      <PageTransition>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </PageTransition>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-40 hidden h-24 md:block"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage: "linear-gradient(to bottom, transparent, black)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
        }}
      />
    </>
  );
}
