import React from 'react';
import './App.css';

function App() {
  const [nameInput, setNameInput] = React.useState('');
  const [ageInput, setAgeInput] = React.useState('0');
  const [commentInput, setCommentInput] = React.useState('');
  const [checkboxInput, toggleCommentInput] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Verstuurd!")
    console.log(nameInput, ageInput, commentInput, checkboxInput);
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Gegevens</legend>
          <label htmlFor="username">
            Naam:
            <input
              type="text"
              id="username"
              name="name"
              value={nameInput}
              onChange={(e) => setNameInput([e.target.value])}
            />
          </label>
          <label htmlFor="age">
            Leeftijd:
            <input
              type="number"
              id="age"
              name="age"
              value={ageInput}
              onChange={(e) => setAgeInput(e.target.value)}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Jouw review</legend>
          <label className="comment-section" htmlFor="comments">
            Opmerkingen:
            <textarea
              id="comments"
              placeholder="Wat vond je van het recept"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              rows="4"
            >
                </textarea>
          </label>
          <label htmlFor="newsletter">
            <input
              type="checkbox"
              id="newsletter"
              value={checkboxInput}
              onClick={() => toggleCommentInput(!commentInput)}
            />
            Ik schrijf me in voor de niewsbrief
          </label>
          <button type="submit">versturen</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
