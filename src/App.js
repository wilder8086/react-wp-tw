import React from "react";
import ReactDOM from "react-dom";
import './styles.css';

const App = () => {
  return (
    <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
      <div className="sm:flex sm:items-center px-6 py-4">
        <img className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars.githubusercontent.com/u/771481?v=4" alt="" />
        <div className="text-center sm:text-left sm:flex-grow">
          <div className="mb-4">
            <p className="text-xl leading-tight">wilder Delgado</p>
            <p className="text-sm leading-tight text-grey-dark">Developer</p>
          </div>
          <div>
            <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
          </div>
        </div>
      </div>
    </div>
   );
}

export default App;