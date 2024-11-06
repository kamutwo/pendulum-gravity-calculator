"use client";
import { useEffect, useState } from "react";

type Props = {
  id: string;
  title: string;
  onChange(newInput: string): void;
};

export default function Input({ id, title, onChange }: Props) {
  const [isClient, setIsClient] = useState(false);
  const [prevValue, setPrevValue] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return <div>Loading...</div>;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = document.getElementById(id) as HTMLInputElement;
    if (
      /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/.test(input.value) ||
      input.value == ""
    ) {
      setPrevValue(input.value);
      onChange(event.target.value);
    } else {
      input.value = prevValue;
    }
  };

  return (
    <div>
      <div>{title}</div>
      <input
        id={id}
        className="rounded-md bg-white text-black min-w-24 outline-none px-2"
        onChange={handleInputChange}
        autoComplete="off"
      />
    </div>
  );
}
