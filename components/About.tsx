import { motion } from "framer-motion";
const textAnimate = {
  offscreen: { x: 50, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
const textUpAnimate = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const About = () => {
  return (
    <div
      id="about"
      className="bg-white py-[100px] w-screen max-w-full desktop:container"
    >
      <div className=" flex flex-row max-w-[900px] mx-auto tablet:block mobile:block mobile:px-3">
        <motion.div
          variants={textAnimate}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.2, duration: 1 },
          }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ staggerChildren: 1 }}
          className="flex-grow my-auto text-right uppercase px-6 tablet:text-center mobile:text-center"
        >
          <h1 className="font-poppins text-3xl font-bold">About</h1>
          <p>what I offer</p>
          <div className="h-52 tablet:h-8 mobile:h-8"></div>
        </motion.div>

        <motion.div
          variants={textAnimate}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.2, duration: 1 },
          }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ staggerChildren: 1 }}
          className=" font-proxima text-[18px] w-[65%] px-6 py-2 tablet:w-full mobile:w-full mobile:px-2"
        >
          <motion.p variants={textUpAnimate}>
            こんにちは！ 私は新しい発見に強い探究心があります。そのうちの1つとしてwebアプリケーション開発の構築に取り組んでいます。
            私は開発時に「シンプルさ」と「使いやすさ」に重きを置いています。これは、プロジェクト本来の目的に最大限集中することを手助けするためです。
            また、利用者の趣向を十分にヒアリングし、アジリティの高いアーキテクトの設計を心がけています。
          </motion.p>
          <br />
          <motion.p variants={textUpAnimate}>
            ディレクション時には、クライアントにあった雰囲気のデザインを提供します。
            この時の私の目標は、多様なパターンを作りながら適切なデザインを見つけることです。
            私が常に目指していることは、プロジェクトの特徴を際立たせるだけでなくエレガントで満足のいく
            使い勝手を実現することです。そのためにはクライアントと密接に連携し、さらなる向上に役立つフィードバックを
            得ることを心がけています。
          </motion.p>
          <br />
          <motion.p variants={textUpAnimate}>
            モダン技術を取り入れることで、動作性に優れたサイトの提供やちょっとしたuiの操作により、ユーザーのインタラクションを
            より快適なものにします。
            私は、ユーザーが「面白い」「興味深い」と感動するような開発を目指しています。
            そして、その反応を見ることが楽しみで大好きです。
            そのために、フロントエンドに多くの時間を費やします。
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
