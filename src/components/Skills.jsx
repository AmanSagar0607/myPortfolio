import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const Skills = () => {
  const getFontSize = () => {
    return "text-sm md:text-base"; // Tailwind CSS classes for different screen sizes
  };

  const getMinHeight = () => {
    return "min-h-50 sm:min-h-15"; // Tailwind CSS classes for different screen sizes
  };

  return (
    <div>
      <p className={`${styles.sectionSubText} mb-4`}>Technologies used in projects</p>
      <h2 className={`${styles.sectionHeadText} mt-15 mb-10 flex flex-col`}>Skills.</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies.map((technology, index) => (
          <Tilt
            key={index}
            className="xs:w-[250px] w-full"
            options={{ max: 45, scale: 1, speed: 450 }}
          >
            <motion.div
              variants={{ opacity: [0, 1], scale: [0.9, 1] }}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div className={`bg-tertiary rounded-[20px] py-5 px-12 ${getMinHeight()} flex justify-evenly items-center flex-col`}>
                <h3 className={`text-white text-[22px] font-bold text-center ${getFontSize()}`}>
                  {technology.name}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
