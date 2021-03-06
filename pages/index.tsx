import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { VscGithubAlt } from "react-icons/vsc";
import { FaDiscord, FaGamepad } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { GiTomato } from "react-icons/gi";
import { CgMathDivide } from "react-icons/cg";
import { motion, Variants } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNextdotjs,
  SiReact,
  SiFastapi,
  SiTailwindcss,
  SiPrisma,
  SiApple,
  SiApplemusic,
  SiYoutube,
} from "react-icons/si";
import { useCopyToClipboard } from "usehooks-ts";
import { useState } from "react";

const Home: NextPage = () => {
  const [value, copy] = useCopyToClipboard();
  const [isModalOpen, setModal] = useState(false);
  return (
    <>
      {isModalOpen && (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center space-x-4 p-10">
          <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
            <h1 className="text-white  font-bold text-6xl mb-4">Copied!</h1>
            <button
              onClick={() => setModal(false)}
              className="px-5 py-2 rounded-xl text-white text-2xl font-semibold bg-red-600 "
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="p-10 md:snap-y snap-mandatory h-screen overflow-scroll bg-[url('/background.jpg')] bg-cover break-keep">
        <div className="flex justify-center items-left min-h-screen flex-col snap-start">
          <h1 className="text-white  font-black text-6xl mb-2">
            ๐ My Name is{" "}
            <span className="text-emerald-500 underline decoration-emerald-500">
              Rnaudah
            </span>
            .
          </h1>
          <p className="font-bold text-2xl text-white">
            ์๋ก์ด ๊ฑธ ์ข์ํ๊ณ , ๋ง๋๋ ๊ฑธ ์ข์ํ๋, ๊ทธ๋ฅ ์ปดํจํฐ๋ฅผ ์ข์ํ๋
            ํ์์ด๋ฉฐ,
          </p>
          <p className="font-bold text-2xl text-white">
            ์ฌ๋ฌ ์๋์ ์ฌ๋ฌ ์์ด๋์ด๋ฅผ ์๊ฐํ๋ฉฐ ๋ง๋๋ ์ค์๋๋ค.
          </p>
          <div className="mt-5 space-x-3">
            <button className="p-4 text-white border-2 border-black hover:bg-black transition rounded-xl">
              <a href="https://github.com/rnaudah">
                <VscGithubAlt className="stroke-1 stroke-white" size="24" />
              </a>
            </button>
            <button
              onClick={() => {
                copy("rnaudah#4654");
                setModal(true);
              }}
              className="p-4 text-white border-2 border-blue-600 hover:bg-blue-600 transition rounded-xl"
            >
              <FaDiscord size="24" />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-left min-h-screen flex-col snap-start">
          <h1 className="font-black  text-white text-3xl space-y-5">
            <span className="text-4xl">My Skills</span>
            <div className="flex">
              <div className="mb-5 flex text-white backdrop-blur-3xl p-10 bg-black bg-opacity-20 rounded-2xl">
                Typescript, Javascript, Python, Next.js ...
              </div>
            </div>
            <span className="text-4xl">I Want to learn</span>
            <div className="flex">
              <div className="flex text-white backdrop-blur-3xl p-10 bg-black bg-opacity-20 rounded-2xl">
                Go, Rust, C, C#, C++, Java, Swift, Flutter ...
              </div>
            </div>
          </h1>
        </div>
        <div className="flex justify-center items-left min-h-screen flex-col snap-start">
          <h1 className="text-white  font-black text-5xl mb-2">Projects</h1>
          <div className="flex flex-row space-x-3 overflow-x-auto py-5">
            <div className="flex justify-center items-left  py-10 px-20  flex-col backdrop-blur-3xl rounded-3xl text-white">
              <h1 className="font-black text-4xl mb-2 ">Synonym</h1>
              <p>์์ด ์์ ํ ๋ ค๊ณ  ๋ง๋  ํ๋ก์ ํธ์๋๋ค.</p>
              <p>๊ทผ๋ฐ ์์ด์ค์ด ๊ทธ๋ง๋์์</p>
              <p>์ธ๋ฐ์์ด์ง ํ๋ก์ ํธ๋๋๋ค.</p>
              <div className="flex mt-5">
                <a href="https://github.com/rnaudah/Synonym">
                  <VscGithubAlt size="30" />
                </a>
              </div>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <h1 className="font-black text-4xl mb-2 ">Short_Url</h1>
              <p>๋ธ๋ง๋ ์ฝ๋ ๊ฐ์๋ฅผ 30% ์ ๋ ์๊ฐํ๋ค</p>
              <p>Prisma ์ Next js๋ก ๋ง๋  ๊ฐ๋จํ Url ๋จ์ถ๊ธฐ์๋๋ค.</p>
              <div className="flex mt-5">
                <a href="https://github.com/rnaudah/Short_Url">
                  <VscGithubAlt size="30" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-left min-h-screen flex-col snap-start">
          <h1 className="text-white  font-black text-5xl mb-2">I Like ...</h1>
          <div className="flex flex-row space-x-10 overflow-x-auto flex-shrink-0 p-10 ">
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <SiApple className="w-32 h-32 fill-white mb-5" />
              <p className="font-bold text-white text-2xl">
                ์ ๋ ์ ํ์ ์ข์ํ๋ ์ฑ๋ฑ์ด์ด์,
              </p>
              <p className="font-bold text-white text-2xl">
                ์ ํ์ ๋์์ธ ๊ทธ ์์ฒด๋ฅผ ์ข์ํ๋ ์ฌ๋์๋๋ค.
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <SiApplemusic className="w-32 h-32 fill-pink-500 mb-5" />
              <p className="font-bold text-white text-2xl">
                ์ ๋ ์์์ ์ข์ํฉ๋๋ค.
              </p>
              <p className="font-bold text-white text-2xl">
                ํนํ ํํฉ, R{"&"}B๋ฅผ ์ข์ํฉ๋๋ค.
              </p>
              <p className="font-bold text-white text-2xl">
                ์์ด์ ์ ์์ ํฌ์ด๊ธฐ๋ ํฉ๋๋ค.
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <motion.div
                animate={{
                  rotate: [15, 0, -15, 0, 15, 0, -15, 0],
                }}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <FaGamepad className="w-32 h-32 fill-blue-700 mb-5" />
              </motion.div>
              <p className="font-bold text-white text-2xl">
                ๊ฒ์๋ ์ข์ํฉ๋๋ค.
              </p>
              <p className="font-bold text-white text-2xl">๊ฐ์ข ํด๋ํฐ ๊ฒ์,</p>
              <p className="font-bold text-white text-2xl">
                ํนํ ๋ง์ธํฌ๋ํํธ๋ฅผ ์ข์ํ๋ ํธ์๋๋ค.
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <SiYoutube className="w-32 h-32 fill-red-500 mb-5" />
              <p className="font-bold text-white text-2xl">
                ์ ํ๋ธ๋ ์ข์ํฉ๋๋ค.
              </p>
              <p className="font-bold text-white text-2xl">์ฌ๋ฌ ํํฌ ์ ํ๋ฒ,</p>
              <p className="font-bold text-white text-2xl">
                ๊ฒ์ ์ ํ๋ฒ๋ค์ ์ข์ํ๋ ํธ์๋๋ค.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-left min-h-screen flex-col snap-start">
          <h1 className="text-white  font-black text-5xl mb-2">I Hate ...</h1>
          <div className="flex flex-row space-x-10 overflow-x-auto p-10 ">
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <GiTomato className="w-32 h-32 fill-red-500 mb-5" />
              <p className="font-bold text-white text-2xl">
                ์ ๋ ํ ๋งํ ๋ฅผ ํ์คํฉ๋๋ค.
              </p>
              <p className="font-bold text-white text-2xl">
                ๊ทผ๋ฐ ์ด์ํ๊ฒ๋ ์คํ๊ฒํฐ, ํผ์๋ ์ข์ํฉ๋๋ค.
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <RiEnglishInput className="w-32 h-32 fill-white mb-5" />
              <p className="font-bold text-white text-2xl">
                ์ ๋ ์์ด๋ฅผ ํ์คํฉ๋๋ค.
              </p>
              <p className="font-bold text-white text-2xl">
                ์ด์ํ๊ฒ๋ ์ ๋ LA์์ ํ์ด๋ฌ๊ณ ,
              </p>
              <p className="font-bold text-white text-2xl">
                ์ง๊ธ ์ด ์ฌ์ดํธ๋ ์์ด๋ฅผ ์ผ๋ถ ์ฌ์ฉํฉ๋๋ค.
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <CgMathDivide className="w-32 h-32 fill-white mb-5" />
              <p className="font-bold text-white text-2xl">
                ์ ๋ ์ํ์ ์ซ์ดํฉ๋๋ค.
              </p>
              <p className="font-bold text-white text-2xl">
                ์ํ๋ง ํ๋ฉด ์ด์ง๋ฝ์ต๋๋ค.
              </p>
              <p className="font-bold text-white text-2xl">
                ์๋๋ ์ฆ๊ฑฐ์ํ์ผ๋
              </p>
              <p className="font-bold text-white text-2xl">
                ํ์ ๋๋ฌธ์ ์ํ์ ํฅ๋ฏธ๋ฅผ ์๊ณ 
              </p>
              <p className="font-bold text-white text-2xl">
                ์ง๊ธ์ ํ์คํ๊ธฐ๊น์ง์ ์ด๋ฅด๋ ์ต๋๋ค.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-left min-h-screen flex-col snap-start">
          <h1 className="text-white  font-black text-5xl mb-2">
            My Electronics
          </h1>
          <div className="flex flex-row space-x-10 overflow-x-auto flex-shrink-0 p-10 ">
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <h1 className="text-white font-black text-6xl mb-5">์ฑ๋ฑ์ด</h1>
              <p className="font-bold text-white text-2xl">
                ์๊น ์ ์๋ ๋งํ๋ค์ํผ, ์ ๋ ์ฑ๋ฑ์ด ์๋๋ค.
              </p>
              <p className="font-bold text-white text-2xl">
                ์ฌ๋ฌ ์ ํ ์ ์ ๊ธฐ๊ธฐ๋ฅผ ์ข์ํฉ๋๋ค.
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <h1 className="text-white font-black text-6xl mb-5">Computer</h1>
              <p className="font-extrabold text-white text-5xl">
                Macbook pro 16์ธ์น 2019๋ํ
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <h1 className="text-white font-black text-6xl mb-5">Monitor</h1>
              <p className="font-extrabold text-white text-5xl">Lg 27up850</p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <h1 className="text-white font-black text-6xl mb-5">Phone</h1>
              <p className="font-extrabold text-white text-5xl">
                Iphone 12 pro
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <h1 className="text-white font-black text-6xl mb-5">Watch</h1>
              <p className="font-extrabold text-white text-5xl">
                Apple Watch 7์ธ๋ 41mm Nike edition
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <h1 className="text-white font-black text-6xl mb-5">Keyboard</h1>
              <p className="font-extrabold text-white text-5xl">
                ํคํฌ๋ก  K8 ๊ฐ์ถ
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <h1 className="text-white font-black text-6xl mb-5">Mouse</h1>
              <p className="font-extrabold text-white text-5xl">G703</p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <h1 className="text-white font-black text-6xl mb-5">ETC</h1>
              <p className="font-extrabold text-white text-5xl">
                Raspberrypi 4 8gb
              </p>
            </div>
          </div>
        </div>
        <div className="snap-start text-white h-1/3 flex justify-center items-left flex-col">
          <p>
            Copyrightโ 2022 All rights reserved by{" "}
            <a href="https://github.com/rnaudah">Rnaudah</a>
          </p>
          <p>
            Photo by{" "}
            <a href="https://unsplash.com/@asyfaul?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Muhammad Asyfaul
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/t/3d-renders?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
