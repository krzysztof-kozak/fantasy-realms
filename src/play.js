import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from '@sweetalert/with-react';
import '../src/css/play.css';
import deck from './data/deck.json';

export default function Play() {
  const [cards, setCards] = useState(deck.cards);
  const [playerHand, setPlayerHand] = useState([]);
  const [discardPile, setDiscardPile] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [isGameStarted, setisGameStarted] = useState(false);
  const [isGameFinished, setisGameFinished] = useState(false);
  const [endGameMessageDiplay, setEndGameMessageDiplay] = useState('none');

  function shuffle(array) {
    //Fisher–Yates shuffle: source: https://bost.ocks.org/mike/shuffle/
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  const handleStart = () => {
    const randomCards = shuffle([...cards]);

    setPlayerHand(randomCards.slice(0, 7));

    randomCards.splice(0, 8);
    setCards(randomCards);

    setisGameStarted(true);
  };

  const discardCard = (toDiscard) => {
    const copyCards = cards.slice();
    const firstCard = copyCards.splice(0, 1);
    setPlayerHand((prev) => [...prev.map((card) => (card.id !== toDiscard.id ? card : firstCard[0]))]);
    setCards(copyCards);
    setDiscardPile((prev) => [...prev, { ...toDiscard }]);
  };

  const restartGame = () => {
    setCards(deck.cards);
    setPlayerHand([]);
    setDiscardPile([]);
    setTotalScore(0);
    setisGameStarted(false);
    setisGameFinished(false);
    setEndGameMessageDiplay('none');
  };

  const calculateCardBonus = (currentCard) => {
    const synergyCards = currentCard.bonus.id; //które karty dają mi bonus?
    const bonusValue = currentCard.bonus.value; //Jaka jest wartość bonusu?
    let totalBonusValue = 0; //Łączna wartość zebranych bonusów

    playerHand.forEach((card) => {
      // debugger;
      //nie porównuj z samym sobą & i zobacz czy reszta kart daje mi bonus.
      if (currentCard.id !== card.id && synergyCards.includes(card.id)) {
        totalBonusValue += bonusValue;
      }
    });
    return totalBonusValue;
  };

  useEffect(() => {
    let sum = [];
    playerHand.forEach((card) => {
      sum.push(card.basePoints);
      sum.push(calculateCardBonus(card));
      setTotalScore(sum.reduce((cur, prev) => cur + prev));
    });

    playerHand.length > 0 ? setisGameStarted(true) : setisGameStarted(false);
  }, [playerHand]);

  useEffect(() => {
    if (discardPile.length >= 5) {
      setisGameFinished(true);
      setEndGameMessageDiplay('block');
    }
  }, [discardPile]);

  useEffect(() => {
    if (isGameFinished === true) {
      swal('Game Finished', `Your total score was ${totalScore}`, 'success', {
        buttons: ['Restart', 'OK'],
      }).then((value) => {
        if (value === null) {
          restartGame();
        }
      });
    }
  }, [isGameFinished]);

  return (
    <div className='gameContainer box'>
      <section className='drawPile'>
        <div className='gamebox-logo'></div>

        <button style={{ display: isGameStarted ? 'none' : 'block' }} className='start-btn box' onClick={handleStart}>
          Start
        </button>

        <button className='restartButton box' onClick={restartGame} style={{ display: endGameMessageDiplay }}>
          Restart
        </button>

        <span style={{ display: isGameStarted ? 'block' : 'none' }}>
          Total Score:<span className='score'>{totalScore}</span>
        </span>
      </section>

      <section className='discardPile'>
        {discardPile.map((card) => (
          <div
            key={card.id}
            className='card'
            style={{
              backgroundImage: `url(./deck/${card.image})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              height: '245px',
              flex: '1 0 150px',
              margin: '0 1em 1em 0',
            }}></div>
        ))}
      </section>

      <section className='playerHand'>
        {playerHand.map((currentCard) => (
          <div key={currentCard.id} className='card-container'>
            <div className='wrapper'>
              <button disabled={isGameFinished} onClick={() => discardCard(currentCard)}>
                Discard
              </button>
              <p>
                Value:
                <span className='score'>{currentCard.basePoints + calculateCardBonus(currentCard)}</span>
              </p>
            </div>
            <div
              style={{
                backgroundImage: `url(./deck/${currentCard.image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                height: '300px',
                width: '200px',
                flex: '0 0 100%',
                margin: '30 1em 1em 0',
              }}
              className='card'></div>
          </div>
        ))}
      </section>

      <div className='wrapper'>
        <p className='gameHint' style={{ display: isGameStarted ? 'flex' : 'none' }}>
          Try to get rid of cards that don't fit your hand :)
        </p>
        <p className='movesCounter box' style={{ display: isGameStarted ? 'flex' : 'none' }}>
          You can discard
          <span className='score'>{5 - discardPile.length}</span> more time(s).
        </p>
      </div>

      <Link className='link box' to='/'>
        Back to Home
      </Link>
    </div>
  );
}
