import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

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
      const usersRef = collection(db, 'discountUsers');
      const q = query(usersRef, where('phone', '==', phone));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert("Bu telefon raqam allaqachon ro'yxatdan o'tgan.");
        return;
      }

      await addDoc(usersRef, {
        name,
        phone,
        discount: count,
        createdAt: new Date()
      });

      alert("Ma'lumot muvaffaqiyatli yuborildi! 5 soniyadan so'ng sahifani tark etasiz.");

      setName('');
      setPhone('');

      
      setTimeout(() => {
        window.location.href = 'https://google.com'; 
      }, 2000);

    } catch (error) {
      console.error("Xatolik:", error);
      alert("Yuborishda xatolik yuz berdi.");
    }
  };

  return (
    <div className='container'>
      <img src="./images/image.png" alt="logo" />
      <h3 className="discount">%</h3>
      <button onClick={disFunction} disabled={isClicked} className={`btn ${isClicked ? 'disabled' : ''}`}>
        Chegirmani olish uchun bosing
      </button>

      <div className={isClicked ? "modal open" : "modal"}>
        <h2>{count}%</h2>
        <p>Chegirmani qo'lga kiritdingiz. Iltimos, raqamingizni qoldiring.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder='Telefon raqamingizni kiriting'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder='Ism va familiyangizni kiriting'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button type="submit" className='tayyor'>Tayyor</button>
        </form>
      </div>

      <div className={isClicked ? "overlay open" : "overlay"}></div>
    </div>
  );
};

export default App;
