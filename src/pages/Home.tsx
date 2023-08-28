import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center h-full w-4/5 gap-12">
      <h1 className="text-4xl font-bold text-accent">
        Bienvenue chez BeatBuddy !
      </h1>

      <div>
        <p className="text-xl">
          BeatBuddy est votre nouveau compagnon musical, conçu pour libérer
          votre créativité et vous aider à forger des beats uniques.
        </p>
      </div>

      <div className="w-full flex flex-row items-center justify-end gap-6">
        <a href="/" className="bg-element rounded-md py-2 px-4">
          Learn More
        </a>
        <a
          href="/beat-buddy"
          className="bg-accent text-back rounded-md py-2 px-4"
        >
          Get started
        </a>
      </div>
    </div>
  );
}

export default Home;
