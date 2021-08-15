import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { GrAdd } from 'react-icons/gr';
// import { GiBootPrints} from 'react-icons/gi';
import { CgListTree } from 'react-icons/cg';
import { FcBriefcase } from 'react-icons/fc';
import { RiFootprintFill } from 'react-icons/ri';
import { BiCopyright } from 'react-icons/bi';
import { ImLinkedin } from 'react-icons/im';
import { VscGithub } from 'react-icons/vsc';
// import { FaShoePrints } from 'react-icons/fa';
// import { GiFootprint } from 'react-icons/gi';
// import { GiFootsteps } from 'react-icons/gi';
import styles from '../styles/TrackingNavigationFooter.module.css';

const TrackingNavigationFooter = () => (
  <div className={`${styles.footer_nav_bar} flex_row flex_space_between shadowed_small`}>
    <div className={`${styles.footer_nav_top} flex_row flex_start_bl`}>
      <ul className="flex_row flex_start_bl">
        <li className={styles.footer_nav_item}>
          <Link to="/habit/create" className={`${styles.footer_nav_link} spaced_typography`}>
            <IconContext.Provider value={{ className: 'icon_nav' }}>
              <GrAdd />
            </IconContext.Provider>
            Add Habit
          </Link>
        </li>
        <li className={styles.footer_nav_item}>
          <Link to="/habits" className={`${styles.footer_nav_link} spaced_typography`}>
            <IconContext.Provider value={{ className: 'icon_nav' }}>
              <RiFootprintFill />
            </IconContext.Provider>
            Tracked
          </Link>
        </li>
        <li className={styles.footer_nav_item}>
          <Link to="/progress" className={`${styles.footer_nav_link} spaced_typography`}>
            <IconContext.Provider value={{ className: 'icon_nav' }}>
              <GrAdd />
            </IconContext.Provider>
            Progress
          </Link>
        </li>
        <li className={styles.footer_nav_item}>
          <Link to="/categories" className={`${styles.footer_nav_link} spaced_typography`}>
            <IconContext.Provider value={{ className: 'icon_nav' }}>
              <CgListTree />
            </IconContext.Provider>
            Categories
          </Link>
        </li>
      </ul>
    </div>
    <div className={`${styles.footer_nav_bottom} flex_row flex_start_bl`}>
      <div>
        <IconContext.Provider value={{ className: 'icon_copyright' }}>
          <BiCopyright />
        </IconContext.Provider>
        <a href="https://houda-cherkoui.netlify.app/">Houda Cherkaoui</a>
      </div>
      <div>
        <a href="https://houda-cherkoui.netlify.app/" alt="Check my portfolio">
          <IconContext.Provider value={{ className: 'icon_nav_footer' }}>
            <FcBriefcase />
          </IconContext.Provider>
        </a>
        <a href="https://www.linkedin.com/in/houda-cherkaoui-64106395/" alt="Linkedin">
          <IconContext.Provider value={{ className: 'icon_nav_footer' }}>
            <ImLinkedin />
          </IconContext.Provider>
        </a>
        <a href="https://github.com/CalyCherkaoui" alt="GitHub">
          <IconContext.Provider value={{ className: 'icon_nav_footer' }}>
            <VscGithub />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  </div>
);

export default TrackingNavigationFooter;
