import FacebookSVG from './svg/FacebookSVG';
import FlowerSVG from './svg/FlowerSVG';
import InstagramSVG from './svg/InstagramSVG';
import LinkedInSVG from './svg/LinkedInSVG';
import TwitterSVG from './svg/TwitterSVG';
import WhiteFolksamSVG from './svg/WhiteFolksamSVG';
import YoutubeSVG from './svg/YoutubeSVG';

interface IFooterIcon {
  Icon: React.FunctionComponent;
  href: string;
}

const FooterIcon: React.FC<IFooterIcon> = ({ Icon, href }) => {
  return (
    <a className="w-4 h-4 rounded-md mx-2 md:mx-4" href={href}>
      <Icon />
    </a>
  );
};

const Footer = () => {
  const footerIcons: IFooterIcon[] = [
    {
      Icon: FacebookSVG,
      href: 'https://sv-se.facebook.com/folksam',
    },
    {
      Icon: TwitterSVG,
      href: 'https://twitter.com/folksam',
    },
    {
      Icon: InstagramSVG,
      href: 'https://www.instagram.com/folksam/',
    },
    {
      Icon: YoutubeSVG,
      href: 'https://www.youtube.com/user/folksam',
    },
    {
      Icon: LinkedInSVG,
      href: 'https://www.linkedin.com/company/folksam/?originalSubdomain=se',
    },
  ];
  return (
    <footer
      style={{ background: "url('/dark_brown_plate.svg')", height: '25vh' }}
      className="relative flex justify-center flex-col items-center pt-2"
    >
      <WhiteFolksamSVG />
      <p className="text-dirt w-48 text-xs text-center mb-5 md:text-base md:w-64">
        Läs mer om våra försäkringar och vad vi kan hjälpa dig med på{' '}
        <a className="text-white" href="https://www.folksam.se">
          folksam.se
        </a>
      </p>
      <div className="flex">
        {footerIcons.map((icon) => (
          <FooterIcon key={icon.href} {...icon} />
        ))}
      </div>
      <FlowerSVG />
    </footer>
  );
};

export default Footer;
