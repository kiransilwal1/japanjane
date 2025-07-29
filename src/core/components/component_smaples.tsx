import Header from "./header";

export default function SampleComponents() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="placeholder-background-default-default)] rounded-lg shadow-[var(--shadow-DEFAULT)] p-6">
          <h1 className="text-3xl font-bold text-[var(--color-text-default-default)] mb-4">
            Welcome to My App
          </h1>

          <p className="text-[var(--color-text-neutral-tertiary)] mb-6">
            This is an example of using custom CSS properties for theming.
          </p>

          <div className="space-y-4 space-x-4">
            <button className="bg-[var(--color-background-brand-default)] hover:bg-[var(--color-background-brand-hover)] text-[var(--color-text-neutral-on-neutral)] px-4 py-2 rounded-lg transition-colors border border-[var(--color-background-accent-default)]">
              Primary
            </button>

            <button className="bg-[var(--color-background-neutral-tertiary)] hover:bg-[var(--color-background-neutral-tertiary-hover)] text-[var(--color-text-default-default)] px-4 py-2 rounded-lg transition-colors border border-[var(--color-background-neutral-secondary)]">
              Neutral
            </button>

            <button className="text-[var(--color-text-default-default)] px-4 py-2 rounded-lg hover:border hover:border-[var(--color-border-default-default)]">
              Subtle
            </button>

            <button className="bg-[var(--color-background-accent-default)] hover:bg-[var(--color-background-accent-hover)] text-[var(--color-text-positive-on-positive)] px-4 py-2 rounded-lg transition-colors ml-4 border border-[var(--color-border-accent-default)]">
              Accent
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
