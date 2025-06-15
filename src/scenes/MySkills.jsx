import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const skillData = [
  {
    number: "01",
    title: "Experience",
    description:
      "Hands-on experience in full-stack development with modern technologies such as React, Node.js, and MongoDB. Proficient in building scalable web applications and RESTful APIs.",
    color: "bg-blue",
    delay: 0,
  },
  {
    number: "02",
    title: "Innovative",
    description:
      "A creative problem-solver who actively explores new technologies. Skilled in building intuitive user interfaces and improving performance with innovative approaches.",
    color: "bg-red",
    delay: 0.2,
  },
  {
    number: "03",
    title: "Imaginative",
    description:
      "Passionate about designing clean, engaging UI/UX. Leverages tools like Figma and Tailwind CSS to turn ideas into high-impact solutions.",
    color: "bg-yellow",
    delay: 0.4,
  },
];

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* Header and Image */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </h2>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-justify">
            As a Software Engineering graduate, I bring strong technical
            knowledge, hands-on coding experience, and a passion for building
            modern, efficient, and user-centric software solutions.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                src="assets/skills-image.png"
                alt="Team of developers collaborating"
                className="z-10 max-w-full h-auto"
              />
            </div>
          ) : (
            <img
              src="assets/skills-image.png"
              alt="Team of developers collaborating"
              className="z-10 max-w-full h-auto"
            />
          )}
        </div>
      </div>

      {/* Skill Cards */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {skillData.map(({ number, title, description, color, delay }) => (
          <motion.article
            key={number}
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-playfair font-semibold text-5xl">{number}</p>
                <h3 className="font-playfair font-semibold text-3xl mt-3">
                  {title}
                </h3>
              </div>
              <div
                className={`w-1/2 md:w-3/4 h-32 ${color} absolute right-0 top-0 z-[-1]`}
              />
            </div>
            <p className="mt-5 text-justify">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
