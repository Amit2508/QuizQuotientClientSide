import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [Class, setClass] = useState("");
  const [school, setSchool] = useState("");

  const placeholder = [
    "Email",
    "Enter your name",
    "Enter your age",
    "Enter State",
    "Enter City",
    "Enter phone number",
    "Enter School/University(if applicable)",
    "Enter Your Grade"
  ];
  const value = [email, name, age, city, state, phone, school, Class];
  const type = ["email", "text", "number", "text", "text", "number", "text", "text"];

  const handleChangeFunctions = [
    (e) => setEmail(e.target.value),
    (e) => setName(e.target.value),
    (e) => setAge(e.target.value),
    (e) => setCity(e.target.value),
    (e) => setState(e.target.value),
    (e) => setPhone(e.target.value),
    (e) => setSchool(e.target.value),
    (e) => setClass(e.target.value)
    ,
  ];
  const RenderInputField = () => {
    const inputFields = [];
    for (let i = 0; i < placeholder.length; i++) {
      inputFields.push(
        <input
          key={i}
          type={type[i]}
          placeholder={placeholder[i]}
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
          <div className="bg-blue-600 m-2 p-1 block rounded-lg cursor-pointer hover:bg-blue-400">
            <p className="text-white">Update</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
