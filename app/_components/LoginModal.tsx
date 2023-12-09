"use client";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { IoCloseOutline } from "react-icons/io5";

const Login = ({ closeModal }) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white max-w-md  mx-auto w-full p-6 rounded shadow-lg">
        <div className="flex flex-col items-stretch">
          <button onClick={closeModal} className="self-end text-lg font-bold">
            <IoCloseOutline size={28} />
          </button>
          <h2 className="text-2xl font-bold text-center mb-4">Sign in</h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              password: Yup.string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters long"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <div className="mb-3 flex flex-col">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <Field name="email" className="w-full p-2 border border-gray-300 rounded-lg mt-1" placeholder="E-mail"/>
                <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
              </div>
              <div className="mb-3 flex flex-col py-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Field name="password" placeholder="Parolă" className="w-full p-2 border border-gray-300 rounded-lg mt-1" />
                <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1"/>
              </div>

              <button type="submit" className="border w-full my-5 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg">Sign In</button>
              <div className="flex justify-between">
                <p className="flex items-center"><input className="mr-2" type="checkbox"/>Remember Me</p>
                <p>Create an account</p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
