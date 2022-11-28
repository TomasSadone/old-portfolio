import scandiwebMockup from '../img/mockupScandiweb.png';
import portfolioMockup from '../img/mockupPortfolio.png';
import instaMockup from '../img/mockupInstagram.png';
import nextEcommerceMockup from '../img/mockupNextEcommerce.png';
import sunnysideMockup from '../img/mockupSunnyside.png';
import bsaleMockup from '../img/mockupBsale.png';
import { Links } from '../types/Links';

type projectData = {
  title: string;
  text: string;
  codeLink: Links;
  pageLink?: Links;
  image: string;
};

const projectsData: projectData[] = [
  {
    title: 'Sunnyside landing page',
    text: `Front end mentor challenge solved with React.js and Tailwind CSS. Fully oriented to desing perfection.`,
    codeLink: 'https://github.com/TomasSadone/sunnyside-landing',
    image: sunnysideMockup,
    pageLink: 'https://tomassadone.github.io/sunnyside-landing/',
  },
  {
    title: 'Next.js eCommerce',
    text: `Dynamic generated website with Server Side rendering and Client Side Navigation. Built using SASS, and Redux Toolkit libraries.`,
    codeLink: 'https://github.com/TomasSadone/fake-store-api',
    pageLink: 'https://fake-store-theta.vercel.app/',
    image: nextEcommerceMockup,
  },
  {
    title: 'eCommerce App',
    text: `This is a completly dynamic website based on a GraphQL API.
    It was built using React class components and libraries such as Redux, SASS, and React Router.`,
    codeLink: 'https://github.com/TomasSadone/scandiweb-junior-react-eCommerce',
    image: scandiwebMockup,
  },
  {
    title: 'Portfolio',
    text: `The portfolio you are seeing. Built using react functional components, 
    TypeScript and styled components. Focused on style and responsiveness.`,
    codeLink: 'https://github.com/TomasSadone/myPortfolio',
    image: portfolioMockup,
  },
  {
    title: 'Instagram Card',
    text: `Challenge for a company hiring process, it got me in the top 4 over
    more than 200 applicants. No JS or CSS framework. 
    Followed CUBE CSS syntax and used an API and library I was given.`,
    codeLink: 'https://github.com/TomasSadone/instagram-card',
    pageLink: 'https://afraid-aftermath.surge.sh/',
    image: instaMockup,
  },

  {
    title: 'eCommerce front end',
    text: `Page that displays products and categories, and has search by product name. It all interacts with a NODE API which I built (Takes a moment to load first time)`,
    codeLink: 'https://github.com/TomasSadone/bsale-frontend',
    pageLink: 'https://bsalefront.surge.sh/',
    image: bsaleMockup,
  },
];

export default projectsData;
