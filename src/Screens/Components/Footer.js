import mail from "../Icons/mail.png";
import telephone from "../Icons/telephone.png";
import facebook from "../Icons/facebook.png";
import linkedin from "../Icons/linkedin.png";
import twitter from "../Icons/twitter.png";
const Footer = () => {
  return (
    <>
      <div className="sm:grid sm:grid-cols-3 sm:gap-12 p-8 bg-black grid grid-cols-1 items-center">
        <div className="">
          <p className="font-bold text-white">About us</p>
          <p className="text-white text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex flex-col p-2 justify-center items-center">
          <p className="font-bold text-white">Contact us</p>
          <div>
            <div className="flex items-center gap-x-2 mt-2">
              <img src={mail} alt={`mail`} className="w-8 h-8" />
              <p className="text-white">YourEmail@XYZ.com</p>
            </div>
            <div className="flex items-center gap-x-2 mt-1">
              <img src={telephone} alt={`telephone`} className="w-8 h-8" />
              <p className="text-white">999999999</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 justify-center items-center">
          <p className="font-bold text-white">Socials</p>
          <div>
            <div className="flex items-center gap-x-2 mt-2">
              <img src={linkedin} alt={`linkedin`} className="w-8 h-8" />
              <p className="text-white">linkedin.com</p>
            </div>
            <div className="flex items-center gap-x-2 mt-1">
              <img src={facebook} alt={`facebook`} className="w-8 h-8" />
              <p className="text-white">facebook.com</p>
            </div>
            <div className="flex items-center gap-x-2 mt-1">
              <div className="bg-red-600 mt-1">
                <img src={twitter} alt={`twitter`} className="w-8 h-8" />
              </div>
              <p className="text-white">twitter.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
