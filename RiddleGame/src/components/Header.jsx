export default function Header({ onStart, gameStarted }) {
  return (
      <header>
          {!gameStarted && (
              <>
                  <h1>WHO AM I??</h1>
                  <p id="description">
                      Challenge yourself to discover who's who in the 'Who Am I?' guessing game!
                  </p>
                  <button id="onstart" onClick={onStart}>
                      Start Game
                  </button>
              </>
          ) }
      </header>
  );
}
