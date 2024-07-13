// import React from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from './ServiceCard';

ServiceCard.propTypes = {
 title: PropTypes.string.isRequired,
 icon: PropTypes.string.isRequired,
};

const About = () => {
 return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-0 text-secondary flex text-[17px] max-w-3xl leading-[30px]">{`
        As a skilled MERN Full Stack Web developer and experienced freelancer, I offer expertise in HTML, CSS, and JavaScript, with a strong grasp of UI/UX principles and React/Next.js frameworks. I prioritize attention to detail, innovation, and user-centric solutions, aiming for web optimization. I excel in collaborative settings, working closely with clients to create efficient, scalable, and intuitive web applications. Let's work together to bring your ideas to life! 🚀 `}
        </motion.p>

      <div className="mt-20 flex flex-wrap gap-11">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </>
 );
};

export default About;