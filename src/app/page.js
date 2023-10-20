"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showLetter, setShowLetter] = useState(false);

  const handleClickButton = () => {
    setShowLetter(true);
  };
  return (
    <main className="flex min-h-screen m-auto items-center justify-center bg-gradient-to-b from-rose-400 to-rose-200 text-center p-10 flex-col">
      <div className="flex flex-col items-center justify-center">
        <div className="font-medium text-6xl ">
          <h1>{`Chúc mừng ngày Phụ nữ Việt Nam`}</h1>
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
      {showLetter && (
        <div className="text-2xl text-left pl-5">
          <p>Gửi Cậu</p>
          <p>
            Ngày hôm nay của cậu thế nào nhỉ? Chắc là vẫn đi làm, vẫn về nhà,
            xong rồi lại ngủ à :v
          </p>
          <p>
            Hôm nay ở Việt Nam là ngày Phụ nữ, là ngày của các chị em, là ngày
            của cậu ^^
          </p>
          <p>
            Nếu ở Việt Nam, chắc sẽ có ai đó tặng cậu 1 bông hoa, 1 món quà nho
            nhỏ, hay 1 cái gì đó vui vui làm cậu hạnh phúc nhở.
          </p>
          <p>
            Cũng muốn gửi tặng cậu 1 điều gì đấy cho bất ngờ, nhưng mà ở xa quá
            nên không kịp gửi, nên là mình viết vài dòng code này tặng cậu :v
          </p>
          <p>Mong cậu sẽ vui nhá ^^</p>
          <p>Luôn luôn vui vẻ, luôn luôn xinh đẹp, luôn luôn hạnh phúc nhá</p>
          <div className="text-right mt-3">
            <p className="font-bold">Thân gửi</p>
            <p className="text-xl">V.V.H</p>
          </div>
        </div>
      )}
    </main>
  );
}
