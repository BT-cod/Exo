import { useState } from "react";
import BG from "./assets/bg-1.jpg";
import symbols from "./assets/symbs.png";
import globe from "./assets/globe.png";
import fb from "./assets/fb.png";
import insta from "./assets/insta.png";
import linkdin from "./assets/linkdin.png";
import petals from "./assets/petals.png";
import eye from "./assets/eye.png";

function PasswordInput({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Your password"
        value={value}
        onChange={onChange}
        className="border-solid border-2 border-gray-300 w-96 h-14 rounded-lg pl-10 pr-14"
      />
      <img
        src={eye}
        alt="Toggle Password Visibility"
        className="absolute right-4 top-4 cursor-pointer"
        onClick={handleTogglePassword}
      />
    </div>
  );
}

function App() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("Back!");


  const handleLogin = () => {
    if(email === "testmail@gmail.com" && password === "test"){
      alert("Logged In Successfully")
      setMsg("User")
      setEmail("")
      setPassword("")
    }
    else if(email === "" || password === ""){
      alert("Enter Email and Password")
    }
    else{
      alert("Wrong Email or Password")
    }
  }

  return (
    <>
      <div className="min-w-full container flex">
        <div
          className="home mt-16 ml-8 bg-cover bg-left rounded-large"
          style={{
            backgroundImage: `url(${BG})`,
            width: "50%",
            height: "855px",
          }}
        >
          <img src={symbols} alt="symbols" className="pt-6 pl-6" />
          <div className="flex flex-col mt-80">
            <h1 className="text-white pl-6 text-6xl font-bold">
              100% Uptime😎
            </h1>
            <h2 className="text-gray-400 pl-6 text-5xl font-light">
              Zero Infrastructure <br /> Management
            </h2>
            <div className="flex flex-row">
              <p className=" ml-6 mt-10 w-6 h-2 bg-white rounded-full transform rotate-180"></p>
              <p className=" ml-2 mt-10 w-2 h-2 bg-gray-400 bg-opacity-31 rounded-full transform rotate-180"></p>
              <p className=" ml-2 mt-10 w-2 h-2 bg-gray-400 bg-opacity-31 rounded-full transform rotate-180"></p>
            </div>
          </div>
          <div className="flex flex-row">
          <div className="mt-60 flex flex-row">
            <img src={globe} alt="Globe" className="py-1 pr-1 pl-4"/>
            <p className="text-white">aesthisia.com</p>
          </div>
          <div className="footer-icons flex flex-row items-center space-x-6 ml-48 mt-56 pl-96 pt-5">
          <a href="/"><img src={linkdin} alt="LinkedIn" className="mb-1 ml-2" /></a>
          <a href="/"><img src={fb} alt="Facebook" className="mb-1 ml-2" /></a>
          <a href="/"><img src={insta} alt="Instagram" className="mb-1 ml-2" /></a>
          </div>
          </div>
        </div>
        <div className="login container ml-40 w-1/2">
          <img src={petals} alt="Petals" className="ml-96 mt-40 w-20 h-18" />
          <div className="flex flex-row ml-44">
            <h1 className="text-black pl-6 text-6xl font-bold">Welcome</h1>
            <h2 className="text-Green pl-6 text-6xl font-bold">{msg}</h2>
          </div>
          <h2 className="text-gray-500 pl-6 ml-72 pt-4 text-2xl font-light">
            Glad to see you, Again!
          </h2>
          <div className="flex flex-col space-y-8 items-center mt-16">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your email"
              className=" border-solid border-2 border-gray-300 w-96 h-14 rounded-lg pl-10"
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              </div>
          <a href="/">
            <p className="mt-0 ml-96 pl-28 text-gray-400">Forgot Password?</p>
          </a>
          <button type="button" className="w-96 h-14 rounded-lg bg-black text-white text-center text-lg ml-60 mt-20 shadow-3xl" onClick={handleLogin}>Log In</button>
          <div className="flex flex-row mt-20 ml-80"><p className="text-gray-600">Don’t have an account yet?</p><a href="/" className="text-Green font-bold pl-2">Sign Up</a></div>
        </div>
      </div>
    </>
  );
}

export default App;