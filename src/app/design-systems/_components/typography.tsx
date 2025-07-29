"use client";

export default function TypeSection() {
  const types = [
    "title-hero",
    "title-page-small",
    "title-page-large",
    "title-page-base",
    "heading-small",
    "heading-large",
    "heading-base",
    "subtitle-small",
    "subtitle-large",
    "subtitle-base",
    "body-small",
    "body-medium",
    "body-large",
    "body-strong",
    "code-small",
    "code-large",
    "code-base",
  ];
  const text = "A Quick Brown Fox Jumped Over Lazy Dog.";
  return (
    <section className="my-8 px-2">
      {types.map((type, i) => (
        <div key={i} className="mb-16">
          <div className="code-small">
            {type.replace("-", " ").toUpperCase()}
          </div>
          <div className="h-1 bg-background-brand-default w-full"></div>
          <div
            className={`${type} bg-background-glass-positive p-4 rounded-b-400 shadow-inner shadow-background-positive-default`}
          >
            {text}
          </div>
        </div>
      ))}
    </section>
  );
}
