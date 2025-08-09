export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <div className="heading-base">{title}</div>
      <div className="subheading-base">{subtitle}</div>
    </div>
  );
}
