import React, { useState } from "react";

import PhotoGallery from "./PhotoGallery";

import DetialsCard from "./DetialsCard";
import "./App.css";
import SurpriseButoon from "./SurpriseButton";

import PartyPage from "./BirthdayConfetti";
import FallingBalloons from "./FallingBalloons";

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [message, setMessage] = useState("");
  const handleSurpriseClick = () => {
    setShowSurprise(true);

    // Show the main content after a delay
    setTimeout(() => {
      setShowContent(true);
    }, 2000); // 4 seconds delay for animation effect
  };

  return (
    <div className="App">
      {!showContent && (
        <SurpriseButoon handleSurpriseClick={handleSurpriseClick} />
      )}
      {showSurprise&&<FallingBalloons/>}
      {showContent && (
        <>
         
            {" "}
            <FallingBalloons/>
            <h1 className="message">Happy 4-Month Birthday,Shivarth!</h1>
            <PartyPage message={message} setMessage={setMessage}/>
            <PhotoGallery />
            <DetialsCard />
      
        </>
      )}
    </div>
  );
}

export default App;
