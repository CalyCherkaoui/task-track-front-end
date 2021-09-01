import React from 'react';
import { IconContext } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';

import styles from '../styles/AboutPage.module.css';

const About = () => (
  <div className={styles.aboutpage_wrapper}>
    <div className={`${styles.about_frame} box_flex_col_centered m-4 ratio ratio-1x1`}>
      <h3 className={styles.aboutpage_text}>
        This is a tacking app taht allows you to track your daily routine tasks.
        <br />
        This Application was built with Ruby On Rails for the Back-end and React for the Front-end.
      </h3>
      <div className={styles.about_icons}>
        <a href="https://github.com/CalyCherkaoui/task-track-front-end" className={styles.about_icons_link}>
          <IconContext.Provider value={{ className: `${styles.about_icon}` }}>
            <AiFillGithub />
          </IconContext.Provider>
        </a>
        <a href="https://www.linkedin.com/in/houda-cherkaoui-64106395/" className={styles.about_icons_link}>
          <IconContext.Provider value={{ className: `${styles.about_icon}` }}>
            <FiLinkedin />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  </div>
);

export default About;
