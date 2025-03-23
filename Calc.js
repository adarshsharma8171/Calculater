import React, { useState } from "react";

const Calc = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Calculator</h2>
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-2 text-right border rounded mb-2"
        />
        <input
          type="text"
          value={result}
          readOnly
          className="w-full p-2 text-right border rounded mb-4 bg-gray-200"
        />
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/"].map((char) => (
            <button
              key={char}
              onClick={() => handleClick(char)}
              className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              {char}
            </button>
          ))}
          {["4", "5", "6", "*"].map((char) => (
            <button
              key={char}
              onClick={() => handleClick(char)}
              className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              {char}
            </button>
          ))}
          {["1", "2", "3", "-"].map((char) => (
            <button
              key={char}
              onClick={() => handleClick(char)}
              className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              {char}
            </button>
          ))}
          {["0", ".", "C", "+"].map((char) => (
            <button
              key={char}
              onClick={() => (char === "C" ? clearInput() : handleClick(char))}
              className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              {char}
            </button>
          ))}
          <button
            onClick={calculateResult}
            className="col-span-4 p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calc;
