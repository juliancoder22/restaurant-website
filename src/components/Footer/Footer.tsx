import instagramSvg from "../../assets/instagram.svg";
import whatsappSvg from "../../assets/whatsapp.svg";
import facebookSvg from "../../assets/facebook.svg";
import twitterSvg from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 bg-teal-500 py-8 lg:px-40 lg:flex-row lg:justify-between">
      <span className="text-white text-center">
        Website by Julian Aquino - 2024
      </span>
      <div className="flex px-5 gap-6 justify-center lg:flex-row">
        <a href="#">
          <img src={instagramSvg} alt="instagram icon" />
        </a>
        <a href="#">
          <img src={whatsappSvg} alt="whatsapp icon" />
        </a>
        <a href="#">
          <img src={facebookSvg} alt="facebook icon" />
        </a>
        <a href="#">
          <img src={twitterSvg} alt="twitter icon" />
        </a>
        <span className="text-white ml-10 text-center">2012-2024</span>
      </div>
    </div>
  );
};

export default Footer;
