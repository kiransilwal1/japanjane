import React from "react";

export const WhatsAppButton = ({
  children,
  phoneNumber = "+819082900547",
}: {
  children: React.ReactNode;
  phoneNumber?: string;
}) => {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
