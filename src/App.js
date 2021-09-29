import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😂": "Face with Tears of Joy",
  "😍": "Smiling Face with Heart-Eyes",
  "😪": "Sleepy Face",
  "🤝": "Handshake",
  "🙌": "Raising Hands"
};

const emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    /** when we need to access the ke which we dont know we do liek this as key is a variable here= */
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> inside outt</h1>

      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3> emojis we know </h3>
      {emojiList.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/**
 * things to notice
 * class--> classname as class is reseverd keyword in js
  you cannot do - inside key value pairs in jsx like css 
 * style takes an object instead of
 *tag and attrbutes work likely like html
 *onclick takes a function
 **/
