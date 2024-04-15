import scandiwebMockup from '../img/mockupScandiweb.png';
import portfolioMockup from '../img/mockupPortfolio.png';
import instaMockup from '../img/mockupInstagram.png';
import nextEcommerceMockup from '../img/mockupNextEcommerce.png';
import doggypediaMockup from '../img/doggypedia-mockup.png';
import restoreMockup from '../img/restore-mockup.png';
import sunnysideMockup from '../img/mockupSunnyside.png';
import bsaleMockup from '../img/mockupBsale.png';
import devArtMockup from '../img/dev-art-mockup.png';

type projectData = {
    title: string;
    text: string;
    codeLink: string;
    pageLink?: string;
    image: string;
};

const projectsData: projectData[] = [
    {
        title: 'Canva like editor',
        text: `Am editor to create custom images. Hugely optimized rendering and performance`,
        codeLink: 'https://github.com/TomasSadone/dev-art',
        image: devArtMockup,
        pageLink: 'https://tomassadone.github.io/dev-art/',
    },
    {
        title: 'Sunnyside landing page',
        text: `Front end mentor challenge solved with React.js and Tailwind CSS. Fully oriented to desing perfection.`,
        codeLink: 'https://github.com/TomasSadone/sunnyside-landing',
        image: sunnysideMockup,
        pageLink: 'https://tomassadone.github.io/sunnyside-landing/',
    },
    {
        title: 'eCommerce App',
        text: `Please patience on first load, free hosting. Dynamic website based on a GraphQL API.
    It was built using React class components and Redux, SASS, React Router.`,
        codeLink:
            'https://github.com/TomasSadone/scandiweb-junior-react-eCommerce',
        image: scandiwebMockup,
        pageLink: 'https://scandiweb-junior-react-e-commerce.vercel.app/all',
    },
    {
        title: 'Portfolio',
        text: `The portfolio you are seeing. React, 
    TypeScript and styled components. Focused on style and responsiveness.`,
        codeLink: 'https://github.com/TomasSadone/myPortfolio',
        image: portfolioMockup,
    },
    {
        title: 'Restore',
        codeLink: 'https://github.com/TomasSadone/Restore',
        image: restoreMockup,
        pageLink: 'https://re-store-ts.vercel.app/home',
        text: 'Worked with SCRUM methodologies in a group of developers to reach tech goals proposed during sprints. Design, logic, fullstack.',
    },
    // {
    //     title: 'Doggypedia',
    //     codeLink: 'https://github.com/TomasSadone/PI-Dogs',
    //     image: doggypediaMockup,
    //     pageLink: 'https://tomassadone.github.io/PI-Dogs/',
    //     text: 'Please patience on first load, free hosting. Designed and developed a dogs app that includes search, combined filters, ordering, dogs posting, pagination',
    // },
    // {
    //   title: 'Next.js eCommerce',
    //   text: `Dynamic generated website with Server Side rendering and Client Side Navigation. Built using SASS, and Redux Toolkit libraries.`,
    //   codeLink: 'https://github.com/TomasSadone/fake-store-api',
    //   pageLink: 'https://fake-store-theta.vercel.app/',
    //   image: nextEcommerceMockup,
    // },
    // {
    //   title: 'Instagram Card',
    //   text: `Challenge for a company hiring process, it got me in the top 4 over
    //   more than 200 applicants. No JS or CSS framework.
    //   Followed CUBE CSS syntax and used an API and library I was given.`,
    //   codeLink: 'https://github.com/TomasSadone/instagram-card',
    //   pageLink: 'https://afraid-aftermath.surge.sh/',
    //   image: instaMockup,
    // },

    // {
    //   title: 'eCommerce front end',
    //   text: `Page that displays products and categories, and has search by product name. It all interacts with a NODE API which I built (Takes a moment to load first time)`,
    //   codeLink: 'https://github.com/TomasSadone/bsale-frontend',
    //   pageLink: 'https://bsalefront.surge.sh/',
    //   image: bsaleMockup,
    // },
];

export default projectsData;
