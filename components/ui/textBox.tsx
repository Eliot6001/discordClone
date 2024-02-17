"use client";
import React from "react";
import { Input } from "./input";
import { Plus, PlusCircle, PlusCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { EmojiPicker } from "./emojiPicker";

interface TextBoxProps {
  className?: string;
}

const textBox = ({ className }: TextBoxProps) => {
  const onOpen = (str: string) => {
    str;
  };
  return (
    <div className={cn("relative p-4 pb-6", className)}>
      <button
        type="button"
        onClick={() => onOpen("messageFile")}
        className="absolute top-7 left-8 h-[24px] w-[24px] bg-zinc-500 dark:bg-zinc-400 hover:bg-zinc-600 dark:hover:bg-zinc-300 transition rounded-full p-1 flex items-center justify-center"
      >
        <Plus className="text-white dark:text-[#313338]" />
      </button>
      <Input
        className="px-14 py-6 bg-zinc-200/90 dark:bg-zinc-700/75 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200"
        placeholder={`Message`}
      />
      <div className="absolute top-7 right-8">
        <EmojiPicker />
      </div>
    </div>
  );
};

export default textBox;
