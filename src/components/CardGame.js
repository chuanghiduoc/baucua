import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './CardGame.css';

import Deer from "../assets/deer.png";
import Gourd from "../assets/gourd.png";
import Rooster from "../assets/rooster.png";
import Fish from "../assets/fish.png";
import Crab from "../assets/crab.png";
import Shrimp from "../assets/shrimp.png";
import Thau from "../assets/thau.png";
import Dia from "../assets/dia.png";

const CardGame = () => {
  const [isCovered, setIsCovered] = useState(true);
  const [selectedAnimals, setSelectedAnimals] = useState([]);
  const [isShaking, setIsShaking] = useState(false);

  const animals = [Deer, Gourd, Rooster, Fish, Crab, Shrimp];

  const shuffleAnimals = () => {
    const shuffled = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * animals.length);
      shuffled.push(animals[randomIndex]);
    }
    setSelectedAnimals(shuffled);
  };

  const handleUncover = () => {
    setIsCovered(false);
    shuffleAnimals();
  };

  const handleCover = () => {
    setIsCovered(true);
    setSelectedAnimals([]);
  };

  const handleShake = () => {
    setIsShaking(true);
    shuffleAnimals();
    setTimeout(() => {
      setIsShaking(false);
    }, 1000);
  };

  return (
    <div className="container">
      <div className="game-container">
        {isCovered ? (
          <>
            <img src={Thau} alt="thau" className={`thau ${isShaking ? 'shake' : ''} ${isCovered ? 'covered' : ''}`} />
            <img src={Dia} alt="deer" className="dia" />
          </>
        ) : (
          <div className="animal-container">
            <div className="animal-wrapper">
              <img src={selectedAnimals[0]} alt="animal-0" className="animal" />
            </div>
            <div className="animal-wrapper">
              <img src={selectedAnimals[1]} alt="animal-1" className="animal" />
              <img src={selectedAnimals[2]} alt="animal-2" className="animal" />
            </div>
          </div>
        )}
      </div>
      <div className="buttons">
        <Button onClick={handleUncover}>Mở nắp</Button>
        <Button onClick={handleCover}>Đậy nắp</Button>
        <Button onClick={handleShake}>Xốc</Button>
      </div>
    </div>
  );  
};

export default CardGame;
