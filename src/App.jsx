import React from 'react';
import {useForm} from 'react-hook-form';
import './App.css';

import InputComponent from './components/InputComponent';

function App() {

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      dirtyFields,
    },
    watch
  } = useForm({mode: 'onChange'});

  const watchSelectedReferrer = watch('found-through');
  // const watchAllFields = watch();
  // console.log("UserName:", watchAllFields.userName);
  // const [nameInput, setNameInput] = React.useState('');
  // const [ageInput, setAgeInput] = React.useState('0');
  // const [comments, setCommentInput] = React.useState('');
  // const [checkboxInput, toggleCommentInput] = React.useState(false);

  const [state  , setState] = React.useState({
    userName: '', age: '', comments: '', checkboxInput: false,
  });

  function onFormSubmit(data) {
    console.log(data);
    console.log(data.userName, data.age, data.comments, data.checkboxInput);
    console.log("Verstuurd!")
    console.log(state.userName, state.age, state.comments, state.checkboxInput);
  }

  function handleChange(e) {
    const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setState({...state, [e.target.name]: newValue});
  }

  function handleKeyPress(e) {
    // Allow navigation keys, backspace, delete, and control keys
    const allowedKeys = [
      'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter', 'Escape',
      'Control', 'Shift', 'Alt', 'Meta' // Modifier keys
    ];
    // Check if the key is a number or allowed key
    const isNumber = /^\d$/.test(e.key);
    const isAllowedKey = allowedKeys.includes(e.key);
    if (!isNumber && !isAllowedKey) {
      e.preventDefault(); // Prevent the default action if the key is not allowed
    }
  }

  return (<div className="wrapper">
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <fieldset>
        <legend>Gegevens</legend>
        <InputComponent
          intputType="text"
          inputId="name-field"
        />
        <label htmlFor="userName">
          Naam:
          <input
            type="text"
            id="userName"
            className={dirtyFields.userName ? errors.userName ? "is-invalid" : "is-valid" : ""}
            // this register methode below is using a spread operator cause its need to put the reference as well as the name of the element
            {...register("userName", {
              // Input text when filled in will return to true
              // required: "true",
              required: "Naam is verplicht", minLength: {
                value: 3, message: "Naam moet minimaal 3 karakters bevatten"
              }
            })}
            // value={state.userName}
            // onChange={handleChange}
          />
          {errors.userName && <p>{errors.userName.message}</p>}
        </label>
        <label htmlFor="age">
          Leeftijd:
          <input
            type="number"
            id="age"
            onKeyDown={handleKeyPress}
            className={dirtyFields.age ? errors.age ? "is-invalid" : "is-valid" : ""}
            {...register("age", {
              max: {
                value: 80, message: "Je mag maximaal 80 jaar oud zijn",
              },
            })}
          />
          {errors.age && <p>{errors.age.message}</p>}
        </label>
      </fieldset>
      <fieldset>
        <legend>Jouw review</legend>
        <label className="comment-section" htmlFor="comments">
          Opmerkingen:
          <textarea
            id="comments"
            placeholder="Wat vond je van het recept"
            {...register("comments", {
              maxLength: {
                value: 50, message: "Comments mogen 50 karakters bevatten"
              },
            })}
            // value={state.comments}
            // onChange={handleChange}
            rows="4"
          >
                </textarea>
          {errors.comments && <p>{errors.comments.message}</p>}
        </label>
        <label htmlFor="referrer">
          Hoe heb je dit recept gevonden?
          <select id="referrer" {...register("found-through")}>
            <option value="google">Google</option>
            <option value="friend">Vriend</option>
            <option value="advertisement">Advertentie</option>
            <option value="other">Anders</option>
          </select>
        </label>
        {watchSelectedReferrer === "other" && <input
          type="text"
          {...register("found-through-anders")}
        />

        }
        <label htmlFor="newsletter">
          <input
            type="checkbox"
            id="newsletter"
            {...register("checkboxInput")}
            checked={state.checkboxInput}
            onChange={handleChange}
          />
          Ik schrijf me in voor de niewsbrief
        </label>
        <button type="submit">versturen</button>
      </fieldset>
    </form>
  </div>);
}

export default App;
