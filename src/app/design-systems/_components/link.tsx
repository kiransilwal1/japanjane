type LinkProps = {
  text: string;
  enabled: boolean;
};

const Link = ({ text, enabled }: LinkProps) => {
  return (
    <div
      className={
        enabled
          ? `bg-background-glass-brand p-200 body-medium border-1 rounded-200 border-border-brand-tertiary`
          : `body-medium`
      }
    >
      {text}
    </div>
  );
};

export default Link;
