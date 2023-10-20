"use client";

import Image from "next/image";

export default function Home() {
  const handleClickButton = () => {
    console.log("Open ....");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-rose-300 to-rose-100 text-center">
      <div className="flex flex-col items-center justify-center">
        <div className="font-medium text-6xl ">
          <h1>{`Happy Vietnamese Woman's Day`}</h1>
          <h1 className="text-red-600">20-10</h1>
        </div>
        <p className="text-4xl mt-4">Cậu có thư nhé!</p>
        <Image
          src="/heart.png"
          alt="heart-icon"
          width={64}
          height={64}
          onClick={handleClickButton}
          className="cursor-pointer animate-bounce mt-4"
        />
      </div>
    </main>
  );
}
