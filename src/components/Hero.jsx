import { motion } from "framer-motion";
import { styles } from "../styles";
import pofile from "../assets/Pofile.png";
// import blob from "../assets/blob.svg"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 lg:top-[150px] md:top-[150px] top-[85px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        {/* Content arrangement for larger screens */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#6a63f5]" />
          <div className="w-1 sm:h-80 h-80 violet-gradient" />
        </div>
        <div className="md:flex justify-between items-center w-full">
          <div className="flex flex-col">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi👋🏻,   I&#39;m <br className="sm:block hidden" />
              <span className="text-[#915EFF]">Aman Sagar</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop visually attractive web user{" "} <br className="sm:block hidden" />
              interfaces and Web Apllications. <br className="sm:block hidden" /> 
               I bring expertise in UI/UX principles<br className="sm:block hidden" />& frameworks such as React and Nextjs. 
             </p>
             {/* <button  href="mailto:amansagar0307@gmail.com" className="mt-4 bg-secondary text-white py-2 px-4 rounded hover:bg-secondary-dark">
              Hire Me
            </button> */}
          <a href="mailto:amansagar0307@gmail.com" className="mt-4 border-1.5 bg-[#6a63f5aa] text-center box-shadow text-white py-2 px-4 md:w-[30%] lg:w-[30%] w-[50%]  rounded-lg hover:bg-[#665ef7] border-[#665ef7]  transition duration-300 ease-in-out transform hover:scale-102">
              <strong>Hire Me <span className=" text-[20px]"> 🫱🏻‍🫲🏼</span></strong>
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src={pofile}
              alt="Profile"
              className="w-[200px] h-[195px] mt-7 mr-10 rounded-full bg-[#7637ff] md:w-[350px] md:h-[340px] lg:w-42 lg:h-42 border-2 border-white "
              style={{ borderRadius: '50%' }}
            />
          </div>
        </div>
      </div>

      {/* Motion dot */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 mb-10 ">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
