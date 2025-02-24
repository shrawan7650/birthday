import { useEffect, useRef, useState } from "react";
import "./PartyPage.css";

const PartyPage = ({setMessage,message}) => {
  const confettiCanvasRef = useRef(null);
  const fireworksCanvasRef = useRef(null);
  const balloonCanvasRef = useRef(null);
  

  useEffect(() => {
    const confettiCanvas = confettiCanvasRef.current;
    const fireworksCanvas = fireworksCanvasRef.current;
    const balloonCanvas = balloonCanvasRef.current;

    confettiCanvas.width = fireworksCanvas.width = balloonCanvas.width = window.innerWidth;
    confettiCanvas.height = fireworksCanvas.height = balloonCanvas.height = window.innerHeight;

    const confettiCtx = confettiCanvas.getContext("2d");
    const fireworksCtx = fireworksCanvas.getContext("2d");
    const balloonCtx = balloonCanvas.getContext("2d");

    let confetti = [];
    let fireworks = [];
    let balloons = [];

    function createConfetti() {
      confetti = Array.from({ length: 200 }, () => ({
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * confettiCanvas.height - confettiCanvas.height,
        r: Math.random() * 6 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
        speed: Math.random() * 2 + 1,
      }));
    }

    function drawConfetti() {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      confetti.forEach((c) => {
        confettiCtx.beginPath();
        confettiCtx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        confettiCtx.fillStyle = c.color;
        confettiCtx.fill();
        c.y += c.speed;
        if (c.y > confettiCanvas.height) c.y = -c.r;
      });
    }

    function createFirework(x, y) {
      fireworks.push(
        ...Array.from({ length: 50 }, () => ({
          x,
          y,
          r: Math.random() * 5 + 1,
          color: `hsl(${Math.random() * 360}, 100%, 70%)`,
          vx: Math.random() * 4 - 2,
          vy: Math.random() * 4 - 2,
        }))
      );
    }

    function drawFireworks() {
      fireworksCtx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
      fireworks.forEach((f, i) => {
        fireworksCtx.beginPath();
        fireworksCtx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        fireworksCtx.fillStyle = f.color;
        fireworksCtx.fill();
        f.x += f.vx;
        f.y += f.vy;
        f.r -= 0.05;
        if (f.r <= 0) fireworks.splice(i, 1);
      });
    }

    function createBalloons() {
      balloons = Array.from({ length: 10 }, () => ({
        x: Math.random() * balloonCanvas.width,
        y: balloonCanvas.height + Math.random() * 100,
        r: Math.random() * 20 + 10,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
        vy: Math.random() * 2 + 1,
      }));
    }

    function drawBalloons() {
      balloonCtx.clearRect(0, 0, balloonCanvas.width, balloonCanvas.height);
      balloons.forEach((b, i) => {
        balloonCtx.beginPath();
        balloonCtx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        balloonCtx.fillStyle = b.color;
        balloonCtx.fill();
        b.y -= b.vy;
        if (b.y + b.r < 0) balloons.splice(i, 1);
      });
    }

    function animate() {
      drawConfetti();
      drawFireworks();
      drawBalloons();
      requestAnimationFrame(animate);
    }

    createConfetti();
    animate();
  }, []);

  function handleButtonClick() {
    const messagesArray = [
      "🎉 You're a Star! 🎉",
      "✨ Party Time! ✨",
      "💃 Let's Dance! 🕺",
      "🎈 Balloons Everywhere! 🎈",
      "🌟 Shine Bright! 🌟",
    ];
    setMessage(messagesArray[Math.floor(Math.random() * messagesArray.length)]);
    setTimeout(() => setMessage(""), 2000);
  }

  return (
    <div className="party-container">
      <button className="button" onClick={handleButtonClick}>🎉</button>
      {message && <div className="messages">{message}</div>}
      <canvas ref={confettiCanvasRef} className="canvas" />
      <canvas ref={fireworksCanvasRef} className="canvas" />
      <canvas ref={balloonCanvasRef} className="canvas" />
    </div>
  );
};

export default PartyPage;
