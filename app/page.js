"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import sandun from "../public/3d-me.png";
import design from "../public/design.png";
import code from "../public/code.png";
import aichip from "../public/aichip.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import web8 from "../public/web8.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              DevelopedbySandun
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-blue-800 to-blue-400 text-white px-4 py-2 rounded-md ml-8"
                  href="/Sandun resume SE.pdf"
                  download="Sandun resume SE.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 text-blue-500 font-medium md:text-6xl">
              Sandun De Silva
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Frontend Developer and Machine Learning Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Fresh Graduate building websites and AI tools. Join me and I will
              give my best for the company.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a
              href="https://www.linkedin.com/in/sandun-de-silva-6253861b8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="dark:text-white" />
            </a>
            <a
              href="https://github.com/sandunde"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="dark:text-white" />
            </a>
            <a
              href="https://www.facebook.com/ab.dimaria.39"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook className="dark:text-white" />
            </a>
            <a href="mailto:sandundimaria7@gmail.com" rel="noopener noreferrer">
              <AiFillMail className="dark:text-white" />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-blue-400 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            {/* <img src="/3d-me.png" layout="fill" objectFit="cover" alt="sandun" width={"100%"}/> */}
            {/* <Image src={sandun} layout="fill" objectFit="cover" alt="sandun" /> */}
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <img
                src="/3d-me.png"
                alt="sandun"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            </div>
          </div>
        </section>

        <section className="pt-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white text-center">
              My Latest Projects
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white text-center max-w-lg mx-auto">
              I have work for couple of
              <span className="text-blue-400">companies </span> as a developer
              and build <span className="text-blue-400"> AI tools </span> at
              university. I have collaborated with people to create products and
              websites.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white text-center max-w-lg mx-auto">
              I have work with ReactJS, React Native, Flask and more.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-col items-center dark:shadow-white">
              <div className="flex justify-center items-center w-full">
                <img src="/design.png" width={100} height={100} />
                {/* <Image src={design} width={100} height={100} alt="design" /> */}
              </div>
              <h3 className="text-lg font-medium pt-8 pd-2 dark:text-white">
                Designs
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following design
                theory
              </p>
              <h4 className="py-4 text-blue-400 ">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Canva</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-col items-center dark:shadow-white">
              <div className="flex justify-center items-center w-full">
                <img src="/code.png" width={100} height={100} />
                {/* <Image src={code} width={100} height={100} alt="code" /> */}
              </div>
              <h3 className="text-lg font-medium pt-8 pd-2 dark:text-white">
                Code
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following design
                theory
              </p>
              <h4 className="py-4 text-blue-400">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">React</p>
              <p className="text-gray-800 py-1 dark:text-white">Flask</p>
              <p className="text-gray-800 py-1 dark:text-white">Springboot</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-col items-center dark:shadow-white">
              <div className="flex justify-center items-center w-full">
                <img src="/aichip.png" width={100} height={100} />
                {/* <Image src={aichip} width={100} height={100} alt="aichip" /> */}
              </div>
              <h3 className="text-lg font-medium pt-8 pd-2 dark:text-white">
                Artificial Intelligence
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following design
                theory
              </p>
              <h4 className="py-4 text-blue-400">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">NLP</p>
              <p className="text-gray-800 py-1 dark:text-white">
                Computer Vision
              </p>
              <p className="text-gray-800 py-1 dark:text-white">Data Science</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white text-center">
              Portfolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white text-center max-w-lg mx-auto">
              I have work for couple of{" "}
              <span className="text-blue-400">companies </span> as a developer
              and build <span className="text-blue-400"> AI tools </span> at
              university. I have collaborated with people to create products and
              websites.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <img
                src="/web1.png"
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web1"
              />
              {/* <Image
                src={web1}
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web1"
              /> */}
              <h3 className="text-center py-10">
                <a
                  href="https://poppypads.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Full Site
                </a>
              </h3>
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src="/web2.png"
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web1"
              />
              {/* <Image
                src={web2}
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web2"
              /> */}
              <h3 className="text-center py-10">
                <a
                  href="https://cuttingedge.iit.ac.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Full Site
                </a>
              </h3>
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src="/web3.png"
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web1"
              />
              {/* <Image
                src={web3}
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web3"
              /> */}
              <h3 className="text-center py-10">
                <a
                  href="https://ranbathorganic.avrinalanka.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Full Site
                </a>
              </h3>
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src="/web4.png"
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web1"
              />
              {/* <Image
                src={web4}
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web4"
              /> */}
              <h3 className="text-center py-10">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Full Site
                </a>
              </h3>
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src="/web5.png"
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web1"
              />
              {/* <Image
                src={web5}
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web5"
              /> */}
              <h3 className="text-center py-10">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Full Site
                </a>
              </h3>
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src="/web6.png"
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web1"
              />
              {/* <Image
                src={web6}
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web6"
              /> */}
              <h3 className="text-center py-10">
                <a
                  href="https://adiscountautotowing.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Full Site
                </a>
              </h3>
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src="/web7.png"
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web1"
              />
              {/* <Image
                src={web7}
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web7"
              /> */}
              <h3 className="text-center py-10">
                <a
                  href="https://thebiodiversityproject.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Full Site
                </a>
              </h3>
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src="/web8.png"
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web1"
              />
              {/* <Image
                src={web8}
                className="rounded-lg object-cover border border-black"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="web8"
              /> */}
              <h3 className="text-center py-10">
                <a
                  href="https://crime-unfolded-new.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Full Site
                </a>
              </h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
