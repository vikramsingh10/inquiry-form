"use client"; 

import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    education: "",
    introduction: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/proxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set Content-Type to JSON
        },
        body: JSON.stringify(formData), // Convert the form data to JSON
      });
      const result = await response.json();
      if (result.result === "success") {
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          age: "",
          education: "",
          introduction: "",
        });
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error submitting the form: ", error);
      alert("Failed to submit the form. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Submit Your Details
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="age">
            Age
          </label>
          <input
            id="age"
            name="age"
            placeholder="Age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="education">
            Education
          </label>
          <input
            id="education"
            name="education"
            placeholder="Education"
            value={formData.education}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="introduction">
            Introduction
          </label>
          <textarea
            id="introduction"
            name="introduction"
            placeholder="Tell us about yourself"
            value={formData.introduction}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
