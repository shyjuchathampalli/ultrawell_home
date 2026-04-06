import FAQSection from "@/components/ui/FAQSection";
import { faqTabs } from "@/lib/faqData";

export default function FAQPage() {
  return (
    <main>
      <FAQSection tabs={faqTabs} />
    </main>
  );
}