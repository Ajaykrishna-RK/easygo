interface GlassCardProps {
  children: React.ReactNode;
  maxWidth?: string;
}

const GlassCard = ({
  children,
  
}: GlassCardProps) => {
  return (
    <div
      className={`w-full max-w-[639px] p-8 rounded-xl border text-[rgba(255,255,255,1)] border-white/20 backdrop-blur-lg`}
      style={{
        backgroundImage: `
         linear-gradient( rgba(90, 90, 90, 0.92), rgba(20, 30, 120, 0.92) ),
        `,
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
