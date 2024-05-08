import React, { useState } from "react";
import { Link } from "react-router-dom";

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [isEmptyName, setIsEmptyName] = useState(false);
  const [isEmptyRoom, setIsEmptyRoom] = useState(false);
  const join = () => {
    setIsEmptyName(false);
    setIsEmptyRoom(false);
    if (!name) setIsEmptyName(true);
    if (!room) setIsEmptyRoom(true);
    if (!name || !room) {
      return;
    }
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <form className="w-96 rounded px-8 pt-6 pb-8 m-auto ">
        <div className="text-4xl font-bold text-white border-b text-center mb-5 pb-3">
          Join chat
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="Name"
          >
            Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Name"
            type="text"
            placeholder="Name"
          />
          {isEmptyName && (
            <p className="text-red-500 text-xs italic mt-2">Name is required</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="username"
          >
            Room
          </label>
          <input
            onChange={(e) => {
              setRoom(e.target.value);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Room"
            type="text"
            placeholder="Room"
          />
          {isEmptyRoom && (
            <p className="text-red-500 text-xs italic mt-2">Room is required</p>
          )}
        </div>
        {/* <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div> */}
        <Link
          onClick={(e) => {
            if (!room || !name) {
              e.preventDefault();
            }
          }}
          to={`/chat?name=${name}&room=${room}`}
          className="flex items-center justify-center"
        >
          <button
            onClick={join}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Join
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Join;
