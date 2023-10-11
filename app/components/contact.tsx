import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/global.css";

import React from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      email: email,
      password: pass,
    });

    WooCommerce.get("/products")
    .then((data) => {
        return console.log( data.data[0].name)
    })
    .catch((error) => {
        return error
    })
  };

  const WooCommerce = axios.create({
    baseURL: 'https://apollo.code-village.ro/wp-json/wc/v3', // Replace with your store's URL
    auth: {
      username: 'ck_3d06586e1a83d260041f72db0404f0ca5102f1f7', // Replace with your consumer key
      password: 'cs_3e7b2d095ecf51ec04a162882e3dd595eaab9cbd', // Replace with your consumer secret
    },
  });
  



  return (
    <div className="flex justify-center items-center h-screen">
      <form className="h-64 w-64  flex flex-col justify-center items-center gap-3 border border-black rounded-lg">
        <div className="border-b border-gray-500">
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            placeholder="email"
          />
        </div>
        <div className="border-b border-gray-500">
          <input
            value={pass}
            onChange={(event) => {
              setPass(event.target.value);
            }}
            type="password"
            placeholder="password"
          />
        </div>
        <button
          onClick={(event) => {
            handleSubmit(event);
          }}
          className="text-white mt-2 w-24 bg-blue-800 border-none "
          type="submit"
          value="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
