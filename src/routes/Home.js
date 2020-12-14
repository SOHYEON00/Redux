import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const setTargetValue = (e) => {
    setText(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <>
      <h1>To</h1>
      <form onSubmit={formSubmit}>
        <input type="text" value={text} onChange={setTargetValue} />
        <button>add</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
