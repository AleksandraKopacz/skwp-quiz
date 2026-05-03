import { useEffect, useState } from "react";

export function NavBar() {
  const [visible, setVisible] = useState<boolean>(false);
  const [classVariables, setClassVariables] = useState<string>(
    "rounded-lg w-48 bg-pink-800 hidden",
  );
  const changeVisibility = () => {
    switch (visible) {
      case false:
        setVisible(true);
        setClassVariables("rounded-lg w-48 bg-pink-800");
        break;
      case true:
        setVisible(false);
        setClassVariables("rounded-lg w-48 bg-pink-800 hidden");
        break;
    }
  };
  return (
    <nav className="">
      <div className="bg-pink-300 p-4 flex items-center">
        <a href="/quiz/random" className="px-2">
          Losowe pytania
        </a>
        <a onClick={() => changeVisibility()} className="px-2">
          Rozdziały
        </a>
        <a href="/" className="px-2">
          Wylosuj zadanie
        </a>
      </div>
      <div className={classVariables}>
        <a href="/quiz/1" className="block px-4 py-2">
          Rozdział 1
        </a>
        <a href="/quiz/2" className="block px-4 py-2">
          Rozdział 2
        </a>
        <a href="/quiz/3" className="block px-4 py-2">
          Rozdział 3
        </a>
        <a href="/quiz/4" className="block px-4 py-2">
          Rozdział 4
        </a>
        <a href="/quiz/5" className="block px-4 py-2">
          Rozdział 5
        </a>
        <a href="/quiz/6" className="block px-4 py-2">
          Rozdział 6
        </a>
        <a href="/quiz/7" className="block px-4 py-2">
          Rozdział 7
        </a>
        <a href="/quiz/8" className="block px-4 py-2">
          Rozdział 8
        </a>
        <a href="/quiz/9" className="block px-4 py-2">
          Rozdział 9
        </a>
        <a href="/quiz/10" className="block px-4 py-2">
          Rozdział 10
        </a>
        <a href="/quiz/11" className="block px-4 py-2">
          Rozdział 11
        </a>
        <a href="/quiz/test" className="block px-4 py-2">
          Pytania z zajęć
        </a>
      </div>

      {/*<div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">

              <a href="/quiz/random" className="">Losowe pytania</a>

              <a href="/quiz/1" className="">Rozdział 1</a>


              <a href="/quiz/2" className="">Rozdział 2</a>

              <a href="/quiz/3" className="">Rozdział 3</a>

              <a href="/quiz/4" className="">Rozdział 4</a>

              <a href="/quiz/5" className="">Rozdział 5</a>

              <a href="/quiz/6" className="">Rozdział 6</a>

              <a href="/quiz/7" className="">Rozdział 7</a>

              <a href="/quiz/8" className="">Rozdział 8</a>

              <a href="/quiz/9" className="">Rozdział 9</a>

              <a href="/quiz/10" className="">Rozdział 10</a>

              <a href="/quiz/11" className="">Rozdział 11</a>

              <a href="/quiz/test" className="">Pytania z zajęć</a>

              <a href="/" className="">Wylosuj zadanie</a>

          </ul>
        </div>
      </div>*/}
    </nav>
  );
}
