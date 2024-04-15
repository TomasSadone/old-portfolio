import React from 'react';
import { StyledSection } from '../../styledComponents/StyledSection';
import { Card } from '../Card/Card';
import { StyledWork } from './StyledWork';
import projectsData from '../../projectsData/projectsData';

// import { title } from "process";

// type Props = {}

export const Work: React.FC = () => {
    return (
        <StyledSection>
            <StyledWork>
                <h1>Work</h1>
                <div className='card-container'>
                    {/* <Card
            codeLink={scandiCodeLink}
            image={scandiwebMockup}
            title={scandiTilte}
            text={scandiText}
            oneButton={true}
          />
          <Card
            codeLink={instagramCardCodeLink}
            pageLink={instagramCardPageLink}
            title={instagramCardTitle}
            text={instagramCardText}
            image={instaMockup}
          />
          <Card
            codeLink={portfolioCodeLink}
            oneButton={true}
            image={portfolioMockup}
            title={portfolioTitle}
            text={portfolioText}
          /> */}
                    {projectsData.map((project) => {
                        return (
                            <Card
                                codeLink={project.codeLink as string}
                                image={project.image}
                                text={project.text}
                                title={project.title}
                                key={project.title}
                                pageLink={project.pageLink as string}
                                oneButton={!project.pageLink}
                            />
                        );
                    })}
                </div>
            </StyledWork>
        </StyledSection>
    );
};
