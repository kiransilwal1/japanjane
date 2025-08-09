import { Button } from "@/core/components/buttons/button";
import MaxWidthWrapper from "@/core/components/max_width_wrapper";
import { MessageCircle, MessageSquare } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";

export interface SectionProp {
  id?: string;
}

const HeroSection = ({ id }: SectionProp) => {
  return (
    <MaxWidthWrapper className="bg-background-default-secondary tablet:px-4000">
      <section
        id={id}
        className="py-1200 grid grid-cols-1 gap-1200 tablet:grid-cols-2
                justify-items-center place-items-center"
      >
        <div className="flex-col space-y-600">
          <section className="">
            <div className="text-center tablet:text-start title-hero text-text-default-default">
              Apply Now.<br></br> Work in <br></br>
              <span className="text-text-brand-tertiary">Japan</span>
            </div>
            <div className="text-center tablet:text-start body-medium text-text-default-secondary">
              You focus on preparing for your future — we’ll handle the
              paperwork, training, and job matching in Japan
            </div>
          </section>
          <div className="flex justify-center tablet:justify-start">
            <WhatsAppButton phoneNumber="+819082900547">
              <Button
                variant="accent"
                text="Message Now"
                iconLeading={<MessageSquare></MessageSquare>}
              ></Button>
            </WhatsAppButton>
          </div>
        </div>
        <div className="max-w-screen">
          <img src="/japan-hero2.png" alt="Logo" />
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
