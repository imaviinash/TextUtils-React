import React, { useState } from "react";

export default function TextForm(props) {
const handleUpClick = () => {
let newText = text.toUpperCase();
setText(newText);
};

const handleLowClick = () => {
let newText = text.toLowerCase();
setText(newText);
};

const handleSentenceClick = () => {
let newText = text.split(" ").map((currentValue) => {
let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
return newText;
});
setText(newText.join(" "));
};

const handleReverseClick = () => {
let splitWord = text.split("");
let reverseWord = splitWord.reverse("");
let joinedWords = reverseWord.join("");
let newText = joinedWords
setText(newText);
};

const handleClearClick = () => {
let newText = "";
setText(newText);
};

const handleOnChange = (event) => {
setText(event.target.value);
};

const [text, setText] = useState("");
return (
<>
  <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>Convert to Sentencecase</button>
    <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse Text</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>


  </div>
  <div className="container my-3">
    <h2>Your Text Summary</h2>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split("").length} minutes to read</p>
    <h3>Preview</h3>
    <p>{text}</p>
  </div>

</>
);
}