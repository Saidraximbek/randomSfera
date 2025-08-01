import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false); 

  const disFunction = () => {
    const values = [5, 5, 5, 5, 5, 5, 5, 10, 10, 10, 15, 15, 20];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    setCount(randomValue);
    setIsClicked(true); 
  };

  return (
    <div className='container'>
      <img src="./images/image.png" alt="logo" />
      <h3 className="discount">{count}%</h3>
      <button onClick={disFunction} disabled={isClicked}>
        Chegirmani Oling
      </button>

   <div className={isClicked ? "modal open" : "modal"}>
  <h2>{count}%</h2>
  <p>chegirmani qo'lga kiritdingiz. Siz bilan bog'lanishimiz uchun telefon raqamingizni qoldiring!</p>
  <form>
    <input type="tel" placeholder='Telefon raqamingizni kiriting' />
    <button className='tayyor'>Tayyor</button>
  </form>
</div>

<div className={isClicked ? "overlay open" : "overlay"}></div>


<div className={isClicked ? "overlay open" : "overlay close"}></div>

    </div>
  );
};

export default App;
