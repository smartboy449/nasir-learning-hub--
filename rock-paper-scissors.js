const score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };
      reset();
      function reset() {
        let resetButton = document.querySelector('.resetScorebtn');
          resetButton.addEventListener('click', () => {
            score.wins=0;
            score.losses=0;
            score.ties=0; 
            localStorage.removeItem('score'); 
            updateScore()
      });
    }

    
      updateScore();

      let isAutoPlaying = false;
      let intervalId;

      document.querySelector('.rockBtn').addEventListener('click', () => {
        playGame('rock')
      });
      document.querySelector('.paperBtn').addEventListener('click', () => {
        playGame('paper')
      });
      document.querySelector('.scissorsBtn').addEventListener('click', () => {
        playGame('scissors')
      });



      document.body.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
          playGame('rock');
        } else if (event.key === 'p') {
          playGame('paper');
        } else if (event.key === 's') {
          playGame('scissors');
        } else if (event.key === 'Enter') {
          autoPlay();
        } else if (event.key === 'Backspace') {
          reset();
        }
      })

      function autoPlay() {
        if (!isAutoPlaying) {
       intervalId = setInterval(() => {
          const playerMove = pickcomputerMove();
          playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
        document.querySelector('.autoPlayBtn').innerText = 'Stop Playing';
      } else {
        clearInterval(intervalId);
        isAutoPlaying = false;  
         document.querySelector('.autoPlayBtn').innerText = 'Auto Play';
      }  

    }

      function playGame(playerMove) {
        const computerMove = pickcomputerMove();

        let result = '';
        if (playerMove === 'rock') {
          if (computerMove === 'rock') {
          result = 'Tie.'
        } else if (computerMove === 'paper') {
          result = 'You lose.'
        }
         else if (computerMove === 'scissors') {
          result = 'You win.'
         };
      } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win.'
        } else if (computerMove === 'paper') {
          result = 'Tie.'
        }
         else if (computerMove === 'scissors') {
          result = 'You lose.'
         };
      } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You lose.'
        } else if (computerMove === 'paper') {
          result = 'You win.'
        }
         else if (computerMove === 'scissors') {
          result = 'Tie.'
         };
      };
      if (result === 'You win.') {
        score.wins += 1;
      } else if (result === 'You lose.') {
        score.losses += 1;
      } else if (result === 'Tie.') {
        score.ties += 1;
      } 
     localStorage.setItem('score', JSON.stringify(score));

      updateScore();
   
        document.querySelector('.js-result').innerHTML = result;

     const movesElement = document.querySelector('.js-moves')
      movesElement.innerHTML = `You <img src="${playerMove}-emoji.png">  <img src="${computerMove}-emoji.png"> Computer`;

      }

      function updateScore() {
         document.querySelector('.js-score')
          .innerHTML = `Wins:${score.wins} Loses:${score.losses} Ties:${score.ties}`;
         
      }

      function pickcomputerMove() {
        const randomNumber = Math.random();
        let computerMove = '';
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3)  {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        };
        return computerMove;
      };