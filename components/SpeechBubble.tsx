
type SpeechBubbleProps = {
  children: React.ReactNode;
}

function SpeechBubble ({ children }: SpeechBubbleProps) {
  return (
    <div className="relative bg-stone-100 shadow-md rounded">
      <div className="absolute bg-stone-100 h-4 w-4 rotate-45 -top-2 left-4">
      </div>
      <div className="relative rounded p-1">
        {children}
      </div>
    </div>
  );
};

export default SpeechBubble;