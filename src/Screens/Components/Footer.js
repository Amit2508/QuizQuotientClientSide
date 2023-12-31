import mail from "../Icons/mail.png";
import telephone from "../Icons/telephone.png";
import facebook from "../Icons/facebook.png";
import linkedin from "../Icons/linkedin.png";
import twitter from "../Icons/twitter.png";
import InfoModal from "./InfoModal";
import { useState } from "react";
const Footer = () => {
  const [OpenModal, CloseModal] = useState(false);

  const handleModal = () => {
    CloseModal(true);
  };

  return (
    <>
      <div className="sm:grid sm:grid-cols-3 sm:gap-12 p-8 bg-black grid grid-cols-1 items-center">
        <div className="cursor-pointe" onClick={handleModal}>
          <p className="font-bold text-white p-2 bg-red-500 inline-block rounded-xl cursor-pointer">
            About us
          </p>
        </div>
        <div className="flex flex-col p-2 justify-center items-center">
          <p className="font-bold text-white">Contact us</p>
          <div>
            <div className="flex items-center gap-x-2 mt-2">
              <img src={mail} alt={`mail`} className="w-8 h-8" />
              <a href="mailto:quizquotientedu@gmail.com" className="text-white">
                quizquotientedu@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-x-2 mt-1">
              <img src={telephone} alt={`telephone`} className="w-8 h-8" />
              <p className="text-white">9017090254, 7658052089</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 justify-center items-center">
          <p className="font-bold text-white">Socials</p>
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2 mt-2">
              <img src={linkedin} alt={`linkedin`} className="w-8 h-8" />
              <p className="text-white">
                <a
                  href="https://whatsapp.com/channel/0029VaIynPy5kg7DFDP2oO1Z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </p>
            </div>

            <div className="flex items-center gap-x-2 mt-1">
              <img src={facebook} alt={`facebook`} className="w-8 h-8" />
              <p className="text-white">
                <a
                  href="https://t.me/quizquotient"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
              </p>
            </div>

            <div>{OpenModal && <InfoModal modalOpen={CloseModal} />}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
