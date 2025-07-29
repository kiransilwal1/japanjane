import MaxWidthWrapper from "@/core/components/max_width_wrapper";
import DesignSystems from "@/core/components/my_themes";
import ButtonSystems from "./_components/buttons";
import TypeSection from "./_components/typography";
import Accordion from "./_components/accordion";
import CardSection from "./_components/card-section";

const DesignSystemsHome = () => {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-background-default-default p-8 space-y-12">
        <DesignSystems></DesignSystems>
        <section className="space-y-8">
          <Accordion title="Buttons">
            <ButtonSystems></ButtonSystems>
          </Accordion>
          <Accordion title="Typography">
            <TypeSection></TypeSection>
          </Accordion>
          <Accordion title="Cards">
            <CardSection></CardSection>
          </Accordion>
        </section>
      </div>
    </MaxWidthWrapper>
  );
};

export default DesignSystemsHome;
