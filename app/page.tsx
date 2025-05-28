
'use client';
import { useState } from "react";
import dotenv from 'dotenv';
import Feedbackitems from "./components/Feedbackitems";
import FeedbackitemsPopupForm from "./components/FeedbackPopupform";
export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  function openFeedBackPopup() {
    setShowPopup(true);
  }

  return (
    <main className="bg-white text-center max-w-2xl shadow-lg rounded-lg mt-8">
      <div className="bg-gradient-to-b from-cyan-400 to-blue-400">
      <h1 className="font-bold">Coding with Me</h1>
      <p>Help with decide</p>
    </div>
    <div className="m-[10px]"></div>
    <div className="flex justify-end px-[10px] rounded-2xl"><button className="bg-blue-500 py-1" onClick={openFeedBackPopup}>Make A Suggestions</button></div>
    <Feedbackitems/>
     <Feedbackitems/>
      {showPopup && <FeedbackitemsPopupForm setShowPopup={setShowPopup}/>}
    </main>
  );
}
