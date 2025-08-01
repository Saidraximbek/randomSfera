import React, { useState } from 'react';
import { db, collection, addDoc } from './firebase'; // firebase.js dan import

const App = () => {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const disFunction = () => {
    const values = [5, 5, 5, 5, 5, 5, 5, 10, 10, 10, 15, 15, 20];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    setCount(randomValue);
    setIsClicked(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Iltimos, barcha maydonlarni to'ldiring");
      return;
    }

    try {
      await addDoc(collection(db, 'discountUsers'), {
        name,
        phone,
        discount: count,
        createdAt: new Date()
      });
      alert("Ma'lumot muvaffaqiyatli yuborildi!");
      setName('');
      setPhone('');
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Yuborishda xatolik yuz berdi.");
    }
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
        <p>Chegirmani qo'lga kiritdingiz. Iltimos, bog‘lanishimiz uchun raqam qoldiring.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder='Telefon raqamingizni kiriting'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder='Ism va familiyangizni kiriting'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className='tayyor'>Tayyor</button>
        </form>
      </div>

      <div className={isClicked ? "overlay open" : "overlay"}></div>
    </div>
  );
};

export default App;
