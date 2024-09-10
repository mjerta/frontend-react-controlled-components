import React from 'react';
import './App.css';

function App() {
  // const [nameInput, setNameInput] = React.useState('');
  // const [ageInput, setAgeInput] = React.useState('0');
  // const [comments, setCommentInput] = React.useState('');
  // const [checkboxInput, toggleCommentInput] = React.useState(false);

  const [state, setState] = React.useState({
    userName:'',
    age:'0',
    comments: '',
    checkboxInput: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Verstuurd!")
    console.log(state.userName, state.age, state.comments, state.checkboxInput);
  }

  function handleChange(e) {
    const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setState({...state, [e.target.name]: newValue});
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Gegevens</legend>
          <label htmlFor="userName">
            Naam:
            <input
              type="text"
              id="userName"
              name="userName"
              value={state.userName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="age">
            Leeftijd:
            <input
              type="number"
              id="age"
              name="age"
              value={state.age}
              onChange={handleChange}
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
              name="comments"
              value={state.comments}
              onChange={handleChange}
              rows="4"
            >
                </textarea>
          </label>
          <label htmlFor="newsletter">
            <input
              type="checkbox"
              id="newsletter"
              name="checkboxInput"
              checked={state.checkboxInput}
              onChange={handleChange}
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
