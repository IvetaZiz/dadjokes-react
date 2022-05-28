import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './style.css';

const App = () => {
  const [likeCountUp, setLikeCountUp] = useState(0);
  const [likeCountDown, setLikeCountDown] = useState(0);

  return (
    <>
      <div className="container">
        <div class="container">
          <div class="joke">
            <div class="joke__body">
              <div class="joke__user">
                <img
                  class="user-avatar"
                  src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
                />
                <p class="user-name">Neroxx</p>
              </div>

              <p class="joke__text">
                'The secret service isn\'t allowed to yell "Get down!" anymore
                when the president is about to be attacked. Now they have to
                yell "Donald, duck!"
              </p>
            </div>
            <div class="joke__likes">
              <button
                onClick={() => setLikeCountUp(likeCountUp + 1)}
                id="btn-up"
                className="btn-like btn-like--up"
              ></button>
              <span id="likes-up" class="likes-count likes-count--up">
                {likeCountUp}
              </span>
              <button
                onClick={() => setLikeCountDown(likeCountDown + 1)}
                id="btn-down"
                className="btn-like btn-like--down"
              ></button>
              <span id="likes-down" class="likes-count likes-count--down">
                {likeCountDown}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
