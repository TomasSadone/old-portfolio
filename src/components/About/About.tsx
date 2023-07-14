import React from 'react';
import { StyledSection } from '../../styledComponents/StyledSection';
import { StyledAbout } from './StyledAbout';
import image from '../../img/about-picture.png';
import HTMLLogo from '../../img/html.svg';
import CSSLogo from '../../img/css.svg';
import reduxLogo from '../../img/redux.svg';
import JSLogo from '../../img/js.svg';
import TSLogo from '../../img/typescript.svg';
import reactLogo from '../../img/react.svg';
import nextLogo from '../../img/next.svg';
import nodeLogo from '../../img/node.svg';
import expressLogo from '../../img/expressjs.svg';
import sassLogo from '../../img/sass.svg';
import postgresqlLogo from '../../img/postgresql.svg';
import mySQLLogo from '../../img/mysql.svg';
import mongoDBLogo from '../../img/mongodb.svg';
import sequelizeLogo from '../../img/sequelize.svg';
import githubLogo from '../../img/github.svg';
import scrumLogo from '../../img/scrum.svg';
import slackLogo from '../../img/slack.svg';
import trelloLogo from '../../img/trello.svg';

// type Props = {}

export const About = () => {
  return (
    <StyledSection>
      <StyledAbout>
        <h1>About</h1>
        <div className='flex'>
          <div id='portrait'>
            <img alt='Portrait of me' src={image} />
          </div>
          <div className='max-width'>
            <p>
              I&apos;m Tomas Sadone, I&apos;m 22 years old, and I like dogs and
              tennis.
            </p>
            <p>
              I studied marketing at college for one and a half years, and
              I&apos;ve got backgrounds in marketing and online sales, which
              helped me learn new tools and efficiently apply new acquired
              knowledge. I&apos;m now studying web development since september
              2021, and I can say I&apos;ve found my passion.
            </p>
            <p>
              I&apos;m aiming to become a better devoleper each day, constantly
              improving my code, my knowledge, and my skills. I hope to be in
              charge of a developers team one day.
            </p>
            <p>Contact me if you like what I can offer.</p>
          </div>
        </div>
        <div>
          <h2>Skills</h2>
          <h3>Programming languages:</h3>
          <div className='grid '>
            <div className='logo-text grid-item'>
              <img className='logos' src={HTMLLogo} alt='HTML logo' />
              <span>HTML</span>
            </div>
            <div className='logo-text grid-item'>
              <img className='logos' src={CSSLogo} alt='CSS logo' />
              <span>CSS</span>
            </div>
            <div className='logo-text grid-item'>
              <img className='logos' src={JSLogo} alt='Javascript logo' />
              <span>JavaScript</span>
            </div>
            <div className='logo-text grid-item'>
              <img className='logos' src={TSLogo} alt='Typescript logo' />
              <span>TypeScript</span>
            </div>
          </div>
        </div>
        <div>
          <h3>Frameworks:</h3>
          <div className='grid '>
            <div className='logo-text grid-item'>
              <img className='logos' src={reactLogo} alt='React logo' />
              <span>React</span>
            </div>
            <div className='logo-text grid-item'>
              <img className='logos' src={nextLogo} alt='Redux logo' />
              <span>Next.js</span>
            </div>
            <div className='logo-text grid-item'>
              <img className='logos' src={reduxLogo} alt='Redux logo' />
              <span>Redux</span>
            </div>
            <div className='logo-text grid-item'>
              <img className='logos' src={nodeLogo} alt='Redux logo' />
              <span>Node.js</span>
            </div>
            <div className='logo-text grid-item'>
              <img className='logos' src={expressLogo} alt='Redux logo' />
              <span>Express</span>
            </div>
            <div className='logo-text grid-item'>
              <img className='logos' src={sassLogo} alt='Redux logo' />
              <span>Sass</span>
            </div>
          </div>
        </div>
        <div>
          <h3>Databases:</h3>
          <div className='grid'>
            <div className='logo-text grid-item'>
              <img className='logos' src={postgresqlLogo} alt='React logo' />
              <span>PostgreSQL</span>
            </div>
            <div className='logo-text grid-item'>
              <img className='logos' src={mySQLLogo} alt='Redux logo' />
              <span>MySQL</span>
            </div>
            <div className='logo-text grid-item'>
              <img className='logos' src={mongoDBLogo} alt='Redux logo' />
              <span>Mongo DB</span>
            </div>
            <div className='logo-text grid-item'>
              <img className='logos' src={sequelizeLogo} alt='Redux logo' />
              <span>Sequelize</span>
            </div>
          </div>
        </div>
        <div>
          <h3>Others:</h3>
          <div className='grid'>
            <div className='logo-text grid-item'>
              <img className='logos' src={githubLogo} alt='React logo' />
              <span>Github</span>
            </div>
            <div className='logo-text grid-item'>
              <img className='logos' src={scrumLogo} alt='Redux logo' />
              <span>Scrum</span>
            </div>
            <div className='logo-text grid-item'>
              <img className='logos' src={slackLogo} alt='Redux logo' />
              <span>Slack</span>
            </div>
            <div className='logo-text grid-item'>
              <img className='logos' src={trelloLogo} alt='Redux logo' />
              <span>Trello</span>
            </div>
          </div>
        </div>
      </StyledAbout>
    </StyledSection>
  );
};
