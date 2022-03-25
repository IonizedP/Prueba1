import React from 'react';
import ImageSocialBtnFb from '../../assets/media/img-social-facebook.png';
import ImageSocialBtnIg from '../../assets/media/img-social-instagram.png';
import ImageSocialBtnYt from '../../assets/media/img-social-youtube.png';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle} >
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='NProductos' onClick={toggle}>Nuestros Productos</SidebarLink>
                <SidebarLink to='DCuidarte' onClick={toggle}>Disfruta Cuidarte</SidebarLink>
                <SidebarLink to='Blog' onClick={toggle}>Blog</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/https://www.facebook.com/VitalineaMX/' onClick={toggle}>
                    <img src={ImageSocialBtnFb} alt='Facebook' />
                </SidebarRoute>
                <SidebarRoute to='/https://www.instagram.com/vitalineamx/' onClick={toggle}>
                    <img src={ImageSocialBtnIg} alt='Instagram' />
                </SidebarRoute>
                <SidebarRoute to='/https://www.youtube.com/channel/UCQ9QUtKWouX6TaAXyeOwb_Q' onClick={toggle}>
                    <img src={ImageSocialBtnYt} alt='Youtube' />
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar