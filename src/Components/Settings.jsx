import Switcher from "../Switcher";
import React, { useState } from 'react';

function Settings() {

  return (
    <>
      <div className="flex items-center absolute top-3 right-16">
        <button 
          className="h-10 w-10 grid place-content-center text-g cursor-pointer rounded-full dark:text-a hover:bg-aa hover:dark:bg-h transition-all duration-300">
          <Switcher />
        </button>
      </div>
    </>
  )
}

export default Settings;