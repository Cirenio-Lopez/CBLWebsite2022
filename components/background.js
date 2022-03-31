import React, { useRef, useEffect } from "react";
function Background() {
  const canvasRef = useRef(null);
  useEffect(() => {
    function Star(id, x, y) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.r = Math.floor(Math.random() * 2) + 1;
      var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
      this.color = "rgba(255,255,255," + alpha + ")";
    }

    Star.prototype.draw = function () {
      ctx.fillStyle = this.color;
      ctx.shadowBlur = this.r * 2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.fill();
    };

    Star.prototype.move = function () {
      this.y -= 0.15 + params.backgroundSpeed / 100;
      if (this.y <= -10) this.y = HEIGHT + 10;
      this.draw();
    };

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    var WIDTH;
    var HEIGHT;
    var stars = [];
    var initStarPopulation = 50;
    var params = { backgroundSpeed: 50 };
    var animationFrame;
    setCanvasSize();
    init();

    function setCanvasSize() {
      (WIDTH = document.documentElement.clientWidth),
        (HEIGHT = document.documentElement.clientHeight);

      canvas.setAttribute("width", WIDTH);
      canvas.setAttribute("height", HEIGHT);
    }

    function init() {
      ctx.strokeStyle = "white";
      ctx.shadowColor = "white";
      for (var i = 0; i < initStarPopulation; i++) {
        stars[i] = new Star(
          i,
          Math.floor(Math.random() * WIDTH),
          Math.floor(Math.random() * HEIGHT)
        );
      }
      ctx.shadowBlur = 0;
      animate();
    }

    function animate() {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      for (var i in stars) {
        stars[i].move();
      }
      animationFrame = requestAnimationFrame(animate);
    }
    const handleResize = (e) => {
      (WIDTH = document.documentElement.clientWidth),
        (HEIGHT = document.documentElement.clientHeight);

      canvas.setAttribute("width", WIDTH);
      canvas.setAttribute("height", HEIGHT);
      cancelAnimationFrame(animationFrame);
      init();
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return <canvas ref={canvasRef}></canvas>;
}
export default Background;
