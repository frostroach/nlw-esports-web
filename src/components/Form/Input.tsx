import React, { InputHTMLAttributes } from "react";

type ZincInputProps = InputHTMLAttributes<HTMLInputElement>;

const ZincInput: React.FC<ZincInputProps> = (props) => {
  return (
    <input
      {...props}
      className="bg-zinc-900 rounded py-3 px-4 text-sm placeholder:text-zinc-500"
    />
  );
};

export default ZincInput;
