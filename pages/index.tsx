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
            👋 My Name is{" "}
            <span className="text-emerald-500 underline decoration-emerald-500">
              Rnaudah
            </span>
            .
          </h1>
          <p className="font-bold text-2xl text-white">
            새로운 걸 좋아하고, 만드는 걸 좋아하는, 그냥 컴퓨터를 좋아하는
            학생이며,
          </p>
          <p className="font-bold text-2xl text-white">
            여러 시도와 여러 아이디어를 생각하며 만드는 중입니다.
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
              <p>영어 숙제할려고 만든 프로젝트입니다.</p>
              <p>근데 영어쌤이 그만두셔서</p>
              <p>쓸데없어진 프로젝트랍니다.</p>
              <div className="flex mt-5">
                <a href="https://github.com/rnaudah/Synonym">
                  <VscGithubAlt size="30" />
                </a>
              </div>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <h1 className="font-black text-4xl mb-2 ">Short_Url</h1>
              <p>노마드 코더 강의를 30% 정도 수강한뒤</p>
              <p>Prisma 와 Next js로 만든 간단한 Url 단축기입니다.</p>
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
                저는 애플을 좋아하는 앱등이이자,
              </p>
              <p className="font-bold text-white text-2xl">
                애플의 디자인 그 자체를 좋아하는 사람입니다.
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <SiApplemusic className="w-32 h-32 fill-pink-500 mb-5" />
              <p className="font-bold text-white text-2xl">
                저는 음악을 좋아합니다.
              </p>
              <p className="font-bold text-white text-2xl">
                특히 힙합, R{"&"}B를 좋아합니다.
              </p>
              <p className="font-bold text-white text-2xl">
                아이유의 작은 팬이기도 합니다.
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
                게임도 좋아합니다.
              </p>
              <p className="font-bold text-white text-2xl">각종 휴대폰 게임,</p>
              <p className="font-bold text-white text-2xl">
                특히 마인크래프트를 좋아하는 편입니다.
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <SiYoutube className="w-32 h-32 fill-red-500 mb-5" />
              <p className="font-bold text-white text-2xl">
                유튜브도 좋아합니다.
              </p>
              <p className="font-bold text-white text-2xl">여러 테크 유튜버,</p>
              <p className="font-bold text-white text-2xl">
                게임 유튜버들을 좋아하는 편입니다.
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
                저는 토마토를 혐오합니다.
              </p>
              <p className="font-bold text-white text-2xl">
                근데 이상하게도 스파게티, 피자는 좋아합니다.
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <RiEnglishInput className="w-32 h-32 fill-white mb-5" />
              <p className="font-bold text-white text-2xl">
                저는 영어를 혐오합니다.
              </p>
              <p className="font-bold text-white text-2xl">
                이상하게도 저는 LA에서 태어났고,
              </p>
              <p className="font-bold text-white text-2xl">
                지금 이 사이트도 영어를 일부 사용합니다.
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <CgMathDivide className="w-32 h-32 fill-white mb-5" />
              <p className="font-bold text-white text-2xl">
                저는 수학을 싫어합니다.
              </p>
              <p className="font-bold text-white text-2xl">
                수학만 하면 어지럽습니다.
              </p>
              <p className="font-bold text-white text-2xl">
                원래는 즐거워했으나
              </p>
              <p className="font-bold text-white text-2xl">
                학원 때문에 수학의 흥미를 잃고
              </p>
              <p className="font-bold text-white text-2xl">
                지금은 혐오하기까지에 이르렀습니다.
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
              <h1 className="text-white font-black text-6xl mb-5">앱등이</h1>
              <p className="font-bold text-white text-2xl">
                아까 전에도 말했다시피, 저는 앱등이 입니다.
              </p>
              <p className="font-bold text-white text-2xl">
                여러 애플 전자 기기를 좋아합니다.
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <h1 className="text-white font-black text-6xl mb-5">Computer</h1>
              <p className="font-extrabold text-white text-5xl">
                Macbook pro 16인치 2019년형
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
                Apple Watch 7세대 41mm Nike edition
              </p>
            </div>
            <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
              <h1 className="text-white font-black text-6xl mb-5">Keyboard</h1>
              <p className="font-extrabold text-white text-5xl">
                키크론 K8 갈축
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
            Copyrightⓒ 2022 All rights reserved by{" "}
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
