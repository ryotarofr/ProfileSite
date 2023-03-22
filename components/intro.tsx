import Image from "next/image";
import NavbarItem from "../components/NavbarItem";
import { motion } from "framer-motion";
import Icon from "../components/Icon";
import EarthCanvas from './convas/Earth';
import StarsCanvas from './convas/Stars';
import { Navbar } from "./Navbar";
import NameCanvas from './convas/Name';

const textAnimate = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const Intro = () => (
  <div>
    <div
      id="home"
      className="box-border  bg-no-repeat 
      bg-cover bg-[url('/daniel-huniewicz-iQaFCjuMTfo-unsplash.webp')]"
    >
      <div className=" backdrop-blur-3xl bg-black/70  ">
        <div className="desktop:max-w-[1800px] m-auto  flex">
          <div
            className="w-[55%] flex flex-col justify-between h-screen max-h-[808px]
          tablet:w-full tablet:max-w-[500px] tablet:m-auto
          mobile:w-full
        "
          >
            <Navbar />
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
              className="px-16 tablet:px-10 mobile:px-8 text-white"
            >
              <motion.p
                variants={textAnimate}
                className="font-proxima text-xl leading-10 mobile:text-[18px] mobile:py-2 "
              >
                Hi, my name is
              </motion.p>
              <h1 className=" font-bold font-poppins text-5xl  leading-snug mini-laptop:text-4xl mini-laptop:leading-normal tablet:text-4xl tablet:leading-sung mobile:leading-[1.1]">
                Ryotaro Fujii
              </h1>
              <p className="font-proxima text-[22px] max-w-[600px] text-slate-50 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px] mobile:py-2">
                A full-stack web developer, Work on the latest developments using modern technology
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
              viewport={{ once: false, amount: 0.6 }}
              className="px-14 tablet:px-10 py-12 flex flex-row mobile:px-8"
            >
              <Icon
                i={1}
                url="https://github.in/ryotarofr"
                name="Github"
                classes="fa-brands fa-github"
              />

              {/* <Icon
                i={2}
                url="https://twitter.com/anshrathodfr"
                classes="fa-brands fa-twitter"
                name="Twitter"
              /> */}
              {/* <Icon
                i={3}
                url="https://www.linkedin.com/in/ansh-rathod-478a81210/"
                classes="fa-brands fa-linkedin"
                name="Linkedin"
              /> */}
              <Icon
                i={4}
                url="https://discordapp.com/users/925623118389715008"
                classes="fa-brands fa-discord"
              />
              <Icon
                i={5}
                url="mailto:ryoryo.fr0608@icloud.com"
                classes="fa-solid fa-envelope"
                name="Email"
              />
              <Icon
                i={6}
                url="https://www.instagram.com/fr__1030"
                name="Instagram"
                classes="fa-brands fa-instagram"
              />
            </motion.div>
            <StarsCanvas />
            {/* <NameCanvas /> */}
            {/* <EarthCanvas /> */}
          </div>
          <div className="w-[45%] h-screen tablet:hidden mobile:hidden ">
            <div className="w-[45%] h-full absolute">


              {/* <NameCanvas /> */}
              <EarthCanvas />
              {/* <StarsCanvas /> */}

              {/* <Image
                src="/intro (1123 × 1123 px).png"
                layout="fill"
                objectFit="cover"
                className="object-left h-screen "
                alt="intro"
              /> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
