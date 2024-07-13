// ServiceCard.jsx
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const ServiceCard = ({ title, icon }) => {
 return (
    <Tilt className="xs:w-[250px] w-full" options={{ max: 45, scale: 1, speed: 450 }}>
      <motion.div
        variants={{ opacity: [0, 1], scale: [0.9, 1] }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
 );
};

ServiceCard.propTypes = {
 title: PropTypes.string.isRequired,
 icon: PropTypes.string.isRequired,
};

export default ServiceCard;