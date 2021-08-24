import React, { useState, useEffect, useRef } from 'react';
import { Select } from 'antd';
import gsap from 'gsap';
import logo from '../../images/logo.png';
import { useLanguage } from '../../LanguageContext';
import { getTranslations } from '../../translations/getTranslation';

type Props = {
  isOpened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Nav({ isOpened, setOpened }: Props) {
  const { Option } = Select;
  const [duration, setDuration] = useState(0.2);
  const [language, setLanguage] = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const NavUl = useRef(null);

  useEffect(() => {
    window.onresize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setOpened(true);
      }
    };

    if (window.matchMedia('(min-width: 1024px)').matches) {
      setOpened(true);
      setDuration(1);
    } else {
      setDuration(0.2);
    }
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.nav-ul-li',
      { opacity: 0, x: 100 + '%' },
      { opacity: 1, x: 0 + '%', duration: duration }
    );
  }, [isOpened]);

  function handleChange(value: string) {
    setLanguage(value);
  }

  window.addEventListener('scroll', () => {
    if (
      window.matchMedia('(min-width: 1024px)').matches &&
      window.scrollY > 10
    ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <>
      <nav className={`nav ${isOpened ? 'nav-open' : 'nav-closed'}`}>
        <ul className={`nav-ul ${scrolled && 'scrolling'}`} ref={NavUl}>
          <li className='logo'>
            <img src={logo} alt='Logo' />
          </li>
          <li className='nav-ul-items'>
            <li className='nav-ul-li'>{getTranslations(language, 'home')}</li>
            <li className='nav-ul-li'>
              {getTranslations(language, 'portfolio')}
            </li>
            <li className='nav-ul-li'>
              {getTranslations(language, 'aboutMe')}
            </li>
            <li className='nav-ul-li'>
              {getTranslations(language, 'contact')}
            </li>
            <li className='nav-ul-li'>
              <Select
                className='nav-ul-li-select'
                defaultValue='en'
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value='en'>English</Option>
                <Option value='pl'>Polski</Option>
              </Select>
            </li>
          </li>
        </ul>
      </nav>
    </>
  );
}
