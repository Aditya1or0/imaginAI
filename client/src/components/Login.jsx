import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { showLogin, setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);

  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl text-slate-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-2xl text-center text-neutral-700 font-medium"
          initial={{ opacity: 0.2, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {state}
        </motion.h1>
        <p className="text-sm text-center">Create an account</p>

        {state !== "Login" && (
          <motion.div
            className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img src={assets.profile_icon} alt="userimg" width={23} />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Full Name"
              className="outline-none text-sm"
              required
            />
          </motion.div>
        )}

        <motion.div
          className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <img src={assets.email_icon} alt="userimg" className="w-4" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            className="outline-none text-sm"
            required
          />
        </motion.div>
        <motion.div
          className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <img src={assets.lock_icon} alt="userimg" className="w-3" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="outline-none text-sm"
            required
          />
        </motion.div>
        <p className="text-sm text-purple-600 my-4 cursor-pointer">
          Forgot Password?
        </p>
        <motion.button
          className="bg-purple-600 w-full text-white py-2 rounded-full hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {state === "Login" ? "Login" : "Create an account"}
        </motion.button>
        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?
            <span
              onClick={() => setState("Sign Up")}
              className="text-purple-600 cursor-pointer"
            >
              Sign Up
            </span>{" "}
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?
            <span
              onClick={() => setState("Login")}
              className="text-purple-600 cursor-pointer"
            >
              Login
            </span>{" "}
          </p>
        )}
        <motion.img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt=""
          className="absolute top-5 right-5 cursor-pointer"
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.3 }}
        />
      </motion.form>
    </div>
  );
};

export default Login;
