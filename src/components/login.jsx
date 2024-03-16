import login from "./assets/login.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Email, setEmail] = useState();
  const [Pass, setPass] = useState();
  const navigate = useNavigate();
  let Users = [];

  let localstorage = localStorage.getItem("users");

  if (localstorage) {
    Users = JSON.parse(localstorage);
  }
  function useremail(Email) {
    return Users.some((Users) => Users.Email === Email);
  }
  function userpassword(Email, Pass) {
    return Users.some((Users) => Users.Email === Email && Users.Pass === Pass);
  }

  const handleSignin = () => {
    if (Email === "" || Pass === "") {
      alert("“Fields are required!");
    } else if (useremail(Email)) {
      if (userpassword(Email, Pass)) {
        localStorage.setItem("activeUser", Email);
        navigate("/dashboard");
      } else {
        alert("Invalid Password");
      }
    } else {
      alert("Invalid Email");
    }
  };

  return (
    <>
      <div className="bg-[#404040] w-full h-lvh flex justify-center items-center font-Source Sans Pro, sans-serif">
        <div className="h-[550px] md:h-[650px] md:w-[700px] lg:w-[1000px] grid grid-cols-2 rounded-xl shadow-xl">
          <div className="bg-[#aadade] md:col-span-1 md:flex flex-col rounded-l-xl shadow-xl hidden">
            <div className="flex flex-col justify-center">
              <p className="mt-28 ml-12 text-2xl italic">Navigate Expenses,</p>
              <p className="ml-12 text-2xl italic">Celebrate Savings...</p>
            </div>
            <div>
              <img className="rounded-l-xl" src={login} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-8 col-span-2 md:col-span-1 justify-center bg-[#2b2b2b] rounded-xl md:rounded-r-xl md:rounded-none shadow-xl">
            <p className="text-slate-100 text-2xl text-center mb-2 md:mb-10 font-bold">
              EXPENSE <span className="text-[#51d289] ml-1">BOOK</span>
            </p>

            <input
              type="email"
              id="email-login-input"
              className="bg-[#2b2b2b] mr-14 ml-14 border-b-2 border-gray-300 text-slate-100 p-2.5 focus:border-b-2 focus:outline-none text-center"
              placeholder="you@example.com"
              autocomplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              id="pass-login-input"
              className="bg-[#2b2b2b] mr-14 ml-14 border-b-2 border-gray-300 text-slate-100 p-2.5 focus:border-b-2 focus:outline-none text-center"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
              required
            />

            <button
              id="login-btn"
              onClick={handleSignin}
              className="text-[#2b2b2b] bg-[#ffe600] w-[220px] p-1.5 mt-6 items-center self-center rounded-md"
            >
              Log In
            </button>
            <Link to="/" className="self-center text-slate-100">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
