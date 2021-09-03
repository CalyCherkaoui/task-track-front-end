/* eslint-disable max-len */
import React from 'react';
import { SiRails } from 'react-icons/si';

import styles from '../styles/AboutPage.module.css';

const About = () => (
  <div className={styles.aboutpage_wrapper}>
    <div className={`${styles.about_frame} d-flex justify-content-between flex-column m-4`}>
      <div className={styles.aboutpage_text}>
        <p>This is a tacking app that allows you to track your daily routine tasks.</p>
        <p>This Application was built with Ruby On Rails for the Back-end and React for the Front-end.</p>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <span>Built with:</span>
        <div className={styles.about_icons}>
          <i className="fab fa-react" />
        </div>
        <div className={styles.about_icons}>
          <SiRails />
        </div>
      </div>
      <div className="d-flex flex-row">
        <a href="https://github.com/CalyCherkaoui/task-track-front-end" className={styles.about_icons_link}>
          <div className={styles.about_icons}>
            <i className="fab fa-github" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/houda-cherkaoui-64106395/" className={styles.about_icons_link}>
          <div className={styles.about_icons}>
            <i className="fab fa-linkedin-in" />
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default About;
