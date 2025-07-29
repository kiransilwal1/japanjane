import { InfoIcon } from "lucide-react";
import Card from "./cards/card";
import Image from "next/image";

const CardSection = () => {
  return (
    <div className="grid grid-cols-2 gap-600 my-600 items-start">
      <Card
        title="Title"
        variant="horizontal"
        leadingComponent={
          <InfoIcon
            className={`size-800 text-icon-default-default transform transition-transform}`}
          />
        }
      ></Card>
      <Card
        title="Title"
        variant="vertical"
        leadingComponent={
          <InfoIcon
            className={`size-800 text-icon-default-default transform transition-transform}`}
          />
        }
      ></Card>

      <Card
        title="Title"
        variant="horizontal"
        leadingComponent={
          <div className="flex-col justify-center my-200">
            <Image
              src="/placeholder.png"
              alt="Info icon"
              width={200}
              height={200}
            />
          </div>
        }
      />

      <Card
        title="Title"
        variant="vertical"
        leadingComponent={
          <div className="flex-col justify-center h-full my-200">
            <Image
              src="/placeholder.png"
              alt="Info icon"
              width={200}
              height={200}
            />
          </div>
        }
      />
    </div>
  );
};

export default CardSection;
