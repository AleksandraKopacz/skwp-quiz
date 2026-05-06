import { useEffect, useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export function NavBar() {
  const chapter: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <nav className="flex w-screen">
      <div className="bg-emerald-500 backdrop-blur-xs p-4 flex-1 flex justify-center font-bold">
        <a href="/quiz/random" className="px-2">
          Losowe pytania
        </a>
        <Popover className="relative px-2">
          <PopoverButton>Rozdziały</PopoverButton>
          <PopoverPanel
            anchor="bottom"
            className="flex flex-col bg-emerald-500/50 backdrop-blur-xs rounded-md"
          >
            {chapter.map((chapter) => (
              <a
                href={`/quiz/${chapter}`}
                className="px-4 py-2 hover:bg-emerald-600/50 backdrop-blur-xs"
              >
                Rozdział {chapter}
              </a>
            ))}
            <a
              href="/quiz/test"
              className="px-4 py-2 hover:bg-emerald-600/50 backdrop-blur-xs"
            >
              Pytania z zajęć
            </a>
          </PopoverPanel>
        </Popover>
      </div>
      <div></div>
    </nav>
  );
}
