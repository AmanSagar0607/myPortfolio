// import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import PropTypes from 'prop-types';

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: '#1d1836',
                color: '#fff',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #232631' }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.school_name}
                        className='w-[85%] h-[85%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[20px] font-bold'>{experience.title}</h3>
                <p className='text-white-500 text-[16px] font-semibold'>{experience.school_name}</p>
                <p className='text-white-500 text-[16px] font-semibold'>{experience.company_name}</p>
            </div>
            <div>
                <p className='text-secondary text-[14px] font-semibold'>{experience.course}</p>
                {/* <p className='text-secondary text-[14px] font-semibold'>{experience.points}</p> */}
                <ul className="mt-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li 
                    key={`experince-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
            </div>
        </VerticalTimelineElement>
    );
};
ExperienceCard.propTypes = {
    experience: PropTypes.shape({
       date: PropTypes.string.isRequired,
       iconBg: PropTypes.string.isRequired,
       icon: PropTypes.string.isRequired,
       title: PropTypes.string.isRequired,
       school_name: PropTypes.string.isRequired,
       company_name: PropTypes.string.isRequired,
       course: PropTypes.string.isRequired,
       points: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
   };

export const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>What I have done so far</p>
                <h2 className={`${styles.sectionHeadText} `}>Experience</h2>
            </motion.div>
            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={`experience-${index}`} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};


const WrappedExperience = SectionWrapper(Experience, 'experience');
export default WrappedExperience;

