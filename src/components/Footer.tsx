import WhiteFolksamSVG from './svg/WhiteFolksamSVG';

const testComponent = () => {};

const Footer = () => {
  return (
    <footer
      style={{ background: "url('/dark_brown_plate.svg')", height: '40vh' }}
      className="flex justify-center flex-col items-center"
    >
      <WhiteFolksamSVG />
      <p className="text-dirt w-48 text-xs text-center">
        Läs mer om våra försäkringar och vad vi kan hjälpa dig med på{' '}
        <a className="text-white" href="https://www.folksam.se">
          folksam.se
        </a>
      </p>
    </footer>
  );
};

export default Footer;
