import userPhoto from "../Icons/profile.png";
import bright from "../Icons/brightness.png";
import night from "../Icons/night.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { insert_old_jwt } from "../../Firebase/googleSignInScript";

const Navbar = ({ updateState, screen }) => {
  let get_darknessState = localStorage.getItem("web_state");
  if (get_darknessState === null) {
    get_darknessState = 0;
  }
  const navigate = useNavigate();
  const [darknessState, setDarknessState] = useState(
    parseInt(get_darknessState)
  );
  const [imageSet, setImageSet] = useState(bright);
  const [backGroundColor, setBackGroundColor] = useState("bg-white");
  const [text, setText] = useState("text-black");
  const [items, setItems] = useState([]);
  const [imageURL, setImageURL] = useState('');

  const token = Cookies.get('ACCESS_TOKEN');
  useEffect(()=>{
    if(token!==undefined && token.length>10 && token.substring(0,1)!=='{'){
      const decode = jwtDecode(token);
      const image_url = decode.picture;
      setImageURL(image_url);
    }
  },[])

  const handleLightClickListener = () => {
    const newDarknessState = updateState(darknessState === 0 ? 1 : 0);
    updateState(newDarknessState);
    if (darknessState === 0) {
      localStorage.setItem("web_state", JSON.stringify(0));
      setDarknessState(1);
      setImageSet(bright);
      setBackGroundColor("bg-white");
      setText("text-black");
    } else {
      localStorage.setItem("web_state", JSON.stringify(1));
      setDarknessState(0);
      setImageSet(night);
      setBackGroundColor("bg-slate-800");
      setText("text-white");
    }
  };

  useEffect(() => {
    if (darknessState === 0) {
      localStorage.setItem("web_state", JSON.stringify(0));
      setDarknessState(1);
      setImageSet(bright);
      setBackGroundColor("bg-white");
      setText("text-black");
    } else {
      localStorage.setItem("web_state", JSON.stringify(1));
      setDarknessState(0);
      setImageSet(night);
      setBackGroundColor("bg-slate-800");
      setText("text-white");
    }
  }, []);

  useEffect(() => {
    if (screen === "Landing") {
      const LandingScreen = [""];
      setItems(LandingScreen);
    } else if (screen === "Dashboard") {
      const Dashboard = ["Home", "Settings"];
      setItems(Dashboard);
    }
  }, [screen]);

  const HandleNavigation = (item) => {
    let new_item = item.replace(/\s+/g, "");
    navigate(`/${new_item}`);
  };

  const Navigate = useNavigate();
  const handleLogout = () =>{
    const data = Cookies.get('ACCESS_TOKEN');
    if(data!=null && data.length>10){
      insert_old_jwt(data)
      Cookies.remove('ACCESS_TOKEN');
      Navigate('/landing');
    }
  }

  return (
    <>
      <div className={`flex p-4 items-center ${backGroundColor}`}>
        <div>
          <p className="text-blue-500 font-bold text-lg sm:text-2xl">
            QuizQuotient
          </p>
        </div>
        <div className="ml-auto flex space-x-2 p-2 items-center text-sm sm:space-x-8 sm:text-lg">
          {items.map((item) => (
            <p
              key={item}
              className={`${text} font-bold cursor-pointer`}
              onClick={() => HandleNavigation(item)}
            >
              {item}
            </p>
          ))}
          <img src={imageURL.length===0? userPhoto:imageURL} alt={``} 
          className="w-8 h-8 rounded-2xl cursor-pointer"
          onClick={()=>handleLogout()}
          />
          <img
            src={imageSet}
            alt={``}
            className="w-8 h-8 cursor-pointer"
            onClick={() => handleLightClickListener()}
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;
