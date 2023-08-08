import React, { forwardRef, useState } from "react";

type TooltipProps = {
  index: number;
  title: string;
  current: number;
  previous: number;
  // dataIndex: number;
};

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const { index, title, current, previous } = props;

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = `${title} - ${current}hrs - Last Week - ${previous}hrs`;
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
  };

  return (
    <div
      id={`tooltip-${index}`}
      role="tooltip"
      className="tooltip | top-calc invisible absolute left-1/2 -translate-x-1/2 opacity-0"
      ref={ref}
      data-index={index}
    >
      <p>
        This is a tooltip for <strong>{title}</strong>
      </p>
      <button
        className="rounded-2xl bg-very-light-blue px-4 py-2"
        onClick={handleCopyClick}
      >
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
});

export default Tooltip;
