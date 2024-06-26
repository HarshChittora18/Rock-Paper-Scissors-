import React, { useState } from "react";
import "../components/cssFiles/landingPage.css";
import IsPLaying from "./isPlaying";

function LandingPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingWhat, setPlayingWhat] = useState("");

  return (
    <>
      {isPlaying ? (
        <IsPLaying playingWhat={playingWhat} setIsPlaying={setIsPlaying} />
      ) : (
        <div className="landing-page-main-holder">
          <div className="copyright-landing-holder">&#169; Harsh Chittora</div>
          <div className="heading-landing-holder">
            Double <br /> Fun <br /> Zone
          </div>
          <div className="buttons-holder-landing-holder">
            <button
              onClick={() => {
                setIsPlaying(true);
                setPlayingWhat("rockPaperScissors");
              }}
            >
              Rock - Paper - Scissors
            </button>
            <button
              onClick={() => {
                setIsPlaying(true);
                setPlayingWhat("ticTacToe");
              }}
            >
              Tic - Tac - Toe
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LandingPage;
