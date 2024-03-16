import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  let users = []; //geting data from local storage
  let userdata = localStorage.getItem("users");
  let activeuser = localStorage.getItem("activeUser");
  let activeUserData;
  const navigate = useNavigate();

  if (userdata) {
    users = JSON.parse(userdata);
  }
  //storing active user data in veriables
  users.find((user) => {
    user.Email === activeuser;
    activeUserData = user;
  });

  //checking authentication if user is not active redirecting to signin page
  useEffect(() => {
    if (!activeuser) {
      navigate("/login");
    }
  }, [activeuser, navigate]);

  useEffect(() => {});

  return (
    <>
      <section className="bg-[#404040] flex flex-col items-center w-full gap-14">
        <div className="flex flex-col gap-6 m-20">
          <h1 className="text-xl font-bold mb-8 text-center">
            Change Your Password
          </h1>

          <div className="flex flex-col gap-4">
            <input
              type="password"
              id="old-pass"
              className="bg-gray-100 border-2 w-[200px] border-gray-300 rounded-md text-black p-2.5 focus:border-2 focus:border-black text-center"
              placeholder="Old Password"
              required
            />

            <input
              type="password"
              id="new-pass"
              className="bg-gray-100 border-2 w-[200px] border-gray-300 rounded-md text-black p-2.5 focus:border-2 focus:border-black text-center"
              placeholder="New Password"
              required
            />

            <input
              type="password"
              id="confirm-new-pass"
              className="bg-gray-100 border-2 w-[200px] border-gray-300 rounded-md text-black p-2.5 focus:border-2 focus:border-black text-center"
              placeholder="Confirm New Password"
              required
            />
          </div>

          <button
            id="change-pass"
            className="border p-2 rounded-md w-[120px] self-center text-black mt-6 bg-[#51d289] hover:bg-[#1f9e56] hover:text-slate-100"
          >
            save
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
