import React from 'react'
import ImageLogo from '../../assets/media/img-logo-vitalinea.png';
import ImageSocialButtonFb from '../../assets/media/img-social-facebook.png';
import ImageSocialButtonIg from '../../assets/media/img-social-instagram.png';
import ImageSocialButtonYt from '../../assets/media/img-social-youtube.png';
import {FaBars} from 'react-icons/fa';
import {
    Nav,
    NavContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements.js';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/http://www.vitalinea.com.mx/'>
                        <img src={ ImageLogo } alt='' />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'>Nuestros Productos
                                <img src='ImageLogo' alt='' />
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>Disfruta Cuidarte
                                <img src='ImageLogo' alt='' />
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>Blog
                                <img src='ImageLogo' alt='' />
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavBtn>
                                <NavBtnLink to='/https://www.facebook.com/VitalineaMX/' >
                                    <img src={ ImageSocialButtonFb } alt='' />
                                </NavBtnLink>
                            </NavBtn>
                        </NavItem>
                        <NavItem>
                            <NavBtn>
                                <NavBtnLink to='/https://www.instagram.com/vitalineamx/' >
                                    <img src={ ImageSocialButtonIg } alt='' />
                                </NavBtnLink>
                            </NavBtn>
                        </NavItem>
                        <NavItem>
                            <NavBtn>
                                <NavBtnLink to='/https://www.youtube.com/channel/UCQ9QUtKWouX6TaAXyeOwb_Q' >
                                    <img src={ ImageSocialButtonYt } alt='' />
                                </NavBtnLink>
                            </NavBtn>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;