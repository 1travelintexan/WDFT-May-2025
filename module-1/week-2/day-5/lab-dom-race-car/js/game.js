class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameContainer = document.getElementById("game-container");
    this.gameEndScreen = document.getElementById("game-end");
    this.livesElement = document.getElementById("lives");
    this.scoreElement = document.getElementById("score");
    this.player = new Player(this.gameScreen, 75, 400, 125, 200);
    this.height = 600;
    this.width = 500;
    this.obstacles = [new Obstacle(this.gameScreen, 125, 200)];
    this.score = 0;
    this.lives = 1;
    this.isGameOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.counter = 0;
  }
  start() {
    this.gameScreen.style.height = this.height + "px";
    this.gameScreen.style.width = `${this.width}px`;
    //hide the start screen
    this.startScreen.style.display = "none";
    //show the game container
    this.gameContainer.style.display = "flex";
    //show the game screen
    this.gameScreen.style.display = "block";
    //hide the game over screen
    this.gameEndScreen.style.display = "none";
    //reset the lives and score to the correct numbers for the restart
    this.livesElement.innerText = this.lives;
    this.scoreElement.innerText = this.score;
    //setInterval that runs 60 times per second
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  gameLoop() {
    //increase the counter so I can add an obstacle every 120 frames
    this.counter++;
    // console.log("game loop");
    this.update();
    if (this.isGameOver) {
      clearInterval(this.gameIntervalId);
      this.gameOver();
    }
  }
  update() {
    this.player.move();

    //check if the counter is divisible by 60, then push a new obstacle to the array
    if (this.counter % 180 === 0) {
      this.obstacles.push(new Obstacle(this.gameScreen, 125, 200));
    }
    // obstacles
    for (let i = 0; i < this.obstacles.length; i++) {
      //variable for the current obstacle in the loop
      const currentObstacle = this.obstacles[i];
      //calling the .move method on each obstacle
      currentObstacle.move();

      //checking if the player ever hits an obstacle
      if (this.player.didCollide(currentObstacle)) {
        console.log("hit!");
        //remove the image of the obstacle from the DOM
        currentObstacle.element.remove();
        //remove the data of the obstacle from the array of this.obstacles
        this.obstacles.splice(i, 1);
        i--;
        // to subtract a life from the game if there is a collision
        this.lives--;

        //update the DOM to show the new number of lives
        this.livesElement.innerText = this.lives;

        //if the this.lives === 0, then game is over
        if (this.lives === 0) {
          this.isGameOver = true;
        }
      }

      //checking if the obstacle passes the bottom of the page
      if (currentObstacle.top > 600) {
        this.score++;
        this.scoreElement.innerText = this.score;

        //remember to remove the obstacle after it passes the bottom
        currentObstacle.element.remove();
        //remove the data of the obstacle from the array of this.obstacles
        this.obstacles.splice(i, 1);
        i--;
      }
    }
  }
  gameOver() {
    this.player.element.remove();
    this.player = null;
    this.obstacles.forEach((oneObstacle) => {
      oneObstacle.element.remove();
    });
    this.obstacles = [];

    //hide the game screen
    this.gameScreen.style.display = "none";
    //show the game over screen
    this.gameEndScreen.style.display = "block";
  }
}
