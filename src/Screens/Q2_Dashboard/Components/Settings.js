import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { EmailUserValueUpdater } from "../../../Firebase/SettingsHandler";
import { check_current_jwt } from "../../../Firebase/googleSignInScript";
import { GoogleUserGetter } from "../../../Firebase/SettingsHandler";
import { GoogleUserUpdater } from "../../../Firebase/SettingsHandler";

const Settings = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [Class, setClass] = useState("");
  const [school, setSchool] = useState("");
  const [user, setUser] = useState("");

  const GET_TOKEN = Cookies.get("ACCESS_TOKEN");
  useEffect(() => {
    const updater = async () => {
      if (GET_TOKEN !== undefined) {
        if (GET_TOKEN.length > 10) {
          if (GET_TOKEN.substring(0, 1) !== "{") {
            setUser("Google");
            const decode_data = jwtDecode(GET_TOKEN);
            const data1 = decode_data.given_name;
            const data2 = decode_data.family_name;
            const c_name = data1 + " " + data2;
            const email = decode_data.email;
            const result = await check_current_jwt(GET_TOKEN);
            if (result === true) {
              const data = await GoogleUserGetter(email, GET_TOKEN);
              setAge(data.age);
              setPhone(data.phone);
              setSchool(data.school);
              setClass(data.Class);
              setState(data.state);
              setCity(data.city);
            }
            setName(c_name);
            setEmail(email);
          } else {
            setUser("Email");
            const data = JSON.parse(GET_TOKEN);
            const c_name = data.given_name;
            const phone = data.number;
            const age = data.age;
            const state = data.state;
            const city = data.city;
            const Class = data.Class;
            const school = data.school;
            const email = data.email;
            setEmail(email);
            setName(c_name);
            setPhone(phone);
            setAge(age);
            setState(state);
            setCity(city);
            setClass(Class);
            setSchool(school);
          }
        } else {
          Navigate("/landing");
        }
      }
    };
    updater();
  }, []);

  const placeholder = [
    "Enter your Email",
    "Enter your name",
    "Enter your age",
    "Enter State",
    "Enter City",
    "Enter phone number",
    "Enter School/University(if applicable)",
    "Enter Your Grade",
  ];
  const readonly = [true, true, false, false, false, false, false, false];
  const value = [email, name, age, city, state, phone, school, Class];
  const type = [
    "text",
    "text",
    "number",
    "text",
    "text",
    "number",
    "text",
    "text",
  ];

  const handleChangeFunctions = [
    (e) => setEmail(e.target.value),
    (e) => setName(e.target.value),
    (e) => setAge(e.target.value),
    (e) => setCity(e.target.value),
    (e) => setState(e.target.value),
    (e) => setPhone(e.target.value),
    (e) => setSchool(e.target.value),
    (e) => setClass(e.target.value),
  ];
  const RenderInputField = () => {
    const inputFields = [];
    for (let i = 0; i < placeholder.length; i++) {
      inputFields.push(
        <input
          key={i}
          type={type[i]}
          placeholder={placeholder[i]}
          readOnly={readonly[i]}
          value={value[i]}
          onChange={handleChangeFunctions[i]}
          className={`p-2 m-2 rounded-lg`}
        />
      );
    }
    return inputFields;
  };

  const Navigate = useNavigate();
  const handleClose = () => {
    Navigate("/home");
  };

  async function handleUpdate(age, city, state, phone, school, grade, email) {
    await EmailUserValueUpdater(age, city, state, phone, school, grade, email);
  }
  async function handleGoogleUpdate(
    age,
    city,
    state,
    phone,
    school,
    grade,
    email
  ) {
    await GoogleUserUpdater(age, city, state, phone, school, grade, email);
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-500 p-2">
        <div className="bg-blue-200 p-4 rounded-lg shadow-xl max-h-full overflow-y-auto">
          <button
            onClick={() => handleClose()}
            className="flex bg-gray-100 p-1 rounded-sm font-bold"
          >
            X
          </button>
          <div className="flex flex-col">
            <div className={`font-bold mb-4`}>
              <p>Settings/Update Profile</p>
            </div>

            <div className={`sm:grid sm:grid-cols-2 sm:gap-4 flex flex-col`}>
              {RenderInputField()}
            </div>
          </div>
          <div
            className="bg-blue-600 m-2 p-1 block rounded-lg cursor-pointer hover:bg-blue-400"
            onClick={
              user === "Email"
                ? () =>
                    handleUpdate(age, city, state, phone, school, Class, email)
                : () =>
                    handleGoogleUpdate(
                      age,
                      city,
                      state,
                      phone,
                      school,
                      Class,
                      email
                    )
            }
          >
            <p className="text-white">Update</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
