import React from 'react';
import useMatchMedia from '../hooks/useMatchMedia';
import { Link } from 'react-scroll';
import Image from 'next/image';

const Burger = ({ setOpen, open }) => {
  const handleBurger = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div
      onClick={handleBurger}
      className="flex flex-col items-center justify-center relative cursor-pointer h-8"
    >
      <div
        className={`w-10 h-1 bg-white rounded-md shadow-md transform duration-200 ease-in-out -translate-y-2 ${
          open && 'rotate-45 translate-y-full'
        }`}
      ></div>
      <div
        className={`w-10 h-1 bg-white rounded-md shadow-md transform duration-75 ease-in-out ${
          open && '-translate-x-14 opacity-0 shadow-none'
        }`}
      ></div>
      <div
        className={`w-10 h-1 bg-white rounded-md shadow-md transform duration-200 ease-in-out translate-y-2 ${
          open && '-rotate-45 -translate-y-full'
        }`}
      ></div>
    </div>
  );
};

interface IScrollTo {
  text: string;
  to: string;
}

export const SmoothScroll: React.FC<IScrollTo> = ({ text, to }) => {
  return (
    <li>
      <Link
        className="cursor-pointer p-2 hover:underline"
        to={to}
        smooth={true}
        duration={500}
      >
        {text}
      </Link>
    </li>
  );
};

const NavigationItems = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center flex-col  gap-2 text-xl md:flex-row text-happy">
      <SmoothScroll text="Om Eventet" to="about" />
      <SmoothScroll text="Hund" to="dogs" />
      <SmoothScroll text="Katt" to="cats" />
      <SmoothScroll text="Häst" to="horses" />
      <SmoothScroll text="Sammarbeten" to="horses" />
      <SmoothScroll text="Hitta hit" to="horses" />
      <SmoothScroll text="Anmälan" to="interest" />
    </ul>
  );
};

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const laptop = useMatchMedia('(min-width: 1280px)');

  return (
    <nav className="flex flex-col w-full text-white ">
      <div className="flex justify-between items-center p-4">
        <Image
          src="/static/images/logo/Folksam_logo.svg"
          width={90}
          height={45}
          layout="fixed"
          priority={true}
          alt="A picture of the Logo for Folksam"
        />
        {!laptop && <Burger open={open} setOpen={setOpen} />}
        {laptop && <NavigationItems />}
      </div>
      {open && !laptop && <NavigationItems />}
    </nav>
  );
};

export default Navbar;
