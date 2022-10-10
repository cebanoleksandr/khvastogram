import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = ({dispatch}) => {
    let onDarkTheme = () => {
      let body = document.querySelector('body');
      let dark = document.querySelector('.darkTheme');
      let light = document.querySelector('.lightTheme');
      body.classList.add('dark');
      light.classList.remove('hidden');
      dark.classList.add('hidden');
    }

    let onLightTheme = () => {
      let body = document.querySelector('body');
      let dark = document.querySelector('.darkTheme');
      let light = document.querySelector('.lightTheme');
      body.classList.remove('dark');
      light.classList.add('hidden');
      dark.classList.remove('hidden');
    }

    return (
      <header className='header'>
        <nav className='nav'>
          <input type='checkbox' id='nav__toggler' className='nav__toggler' />
          <label className='nav__toggler-label' htmlFor='nav__toggler'></label>
          <ul className='nav__list'>
            <li className='nav__item'>
              <NavLink 
                className={({isActive}) => `${isActive ? 'active nav__link' : 'nav__link'}`} 
                to='/goods'>
                  Home
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink 
                className={({isActive}) => `${isActive ? 'active nav__link' : 'nav__link'}`} 
                to='/profile'>
                  Profile
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink 
                className={({isActive}) => `${isActive ? 'active nav__link' : 'nav__link'}`} 
                to='/messages'>
                  Messages
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink 
                className={({isActive}) => `${isActive ? 'active nav__link' : 'nav__link'}`} 
                to='/registration'>
                  Sign in
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink 
                className={({isActive}) => `${isActive ? 'active nav__link' : 'nav__link'}`} 
                to='/login'>
                  Log in
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink 
                className={({isActive}) => `${isActive ? 'active nav__link' : 'nav__link'}`} 
                to='/cart'>
                  Cart
              </NavLink>
            </li>
            <li className='nav__item darkTheme'>
              <img className='theme' onClick={onDarkTheme} src="https://w7.pngwing.com/pngs/972/371/png-transparent-lunar-phase-moon-moon-text-logo-monochrome.png" alt="theme" />
            </li>
            <li className='nav__item lightTheme hidden'>
              <img className='theme' onClick={onLightTheme} src="https://img1.freepng.ru/20180414/qlw/kisspng-summer-learning-loss-school-clip-art-sun-vector-5ad1b651850d74.151898001523693137545.jpg" alt="theme" />
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;
