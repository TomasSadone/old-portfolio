import React, { RefObject, useEffect, useRef, useState } from 'react';
import { openLinks } from '../../helpers/openLink';
import { HamburguerMenu } from '../../styledComponents/HamburguerMenu';
import { StyledButton } from '../../styledComponents/StyledButton';
import { StyledNavbar } from './StyledNavbar';

type Props = {
    sections: RefObject<HTMLDivElement>[];
};

export const Navbar: React.FC<Props> = ({ sections }) => {
    const resumeLink: string =
        'https://drive.google.com/file/d/1CV4FGHaMSA7WGRpjbcmCtuAlwFzwbbBy/view?usp=sharing';
    const [openMobileNav, setOpenMobileNav] = useState(false);
    const [activeSection, setActiveSection] = useState<string | undefined>('');

    const workRef = useRef<HTMLButtonElement>(null);
    const aboutRef = useRef<HTMLButtonElement>(null);

    const toggleNav = () => setOpenMobileNav(!openMobileNav);
    const handleClick = (ref: RefObject<HTMLDivElement>) => {
        setOpenMobileNav(false);
        ref.current?.scrollIntoView();
    };
    useEffect(() => {
        const firstSectionOffset: number | undefined =
            sections[0].current?.offsetTop;
        // const height = document.documentElement.scrollHeight;
        const handleScroll = () => {
            sections.forEach((ref) => {
                const sectionTop = ref.current?.offsetTop || 0;
                if (
                    window.innerHeight + window.scrollY >=
                    document.body.offsetHeight
                ) {
                    setActiveSection(sections[2].current?.id);
                }
                if (firstSectionOffset && scrollY < firstSectionOffset) {
                    setActiveSection('');
                }
                if (scrollY >= sectionTop) {
                    setActiveSection(ref.current?.id);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <StyledNavbar>
            <div>
                <h3 onClick={() => window.scrollTo(0, 30)}>Tomas Sadone</h3>
                <HamburguerMenu
                    onClick={toggleNav}
                    open={openMobileNav}
                    className='hamburguer'
                >
                    <span />
                </HamburguerMenu>
                <div className={`navigation ${openMobileNav}`}>
                    <button
                        className={activeSection === 'work' ? 'active' : ''}
                        ref={workRef}
                        onClick={() => handleClick(sections[0])}
                    >
                        WORK
                    </button>
                    <button
                        className={activeSection === 'about' ? 'active' : ''}
                        ref={aboutRef}
                        onClick={() => handleClick(sections[1])}
                    >
                        ABOUT
                    </button>
                    <button
                        onClick={() => handleClick(sections[2])}
                        className={activeSection === 'contact' ? 'active' : ''}
                    >
                        CONTACT
                    </button>
                    <StyledButton
                        className='styled-button'
                        background='1a1a1a'
                        padding='0.875em'
                        onClick={() => openLinks(resumeLink)}
                    >
                        RESUME
                    </StyledButton>
                </div>
            </div>
        </StyledNavbar>
    );
};
