import Image from 'next/image';
import "../style/page.css";

export default function Home(){
  return (
    <div className="container">

      <div className="hero">
        <h1>Scents Boutique</h1>
        <p>Your destination for luxurious fragrances.</p>
      </div>

      <main className="main">
        <section className='description'>
          <p> “Signature” perfume is a symbol of sophistication and class, reflecting modern elegance and timeless charm. This fragrance is inspired by Creed Aventus, featuring a perfect blend of fruity and woody notes. The top notes offer a refreshing burst of pineapple and apple, while the base notes of oakmoss and vanilla add a smooth touch, making the scent long-lasting and captivating. “Signature” is an ideal choice for a bold and confident style, giving your personality an unforgettable identity.</p>
        </section>
        <section className="products">
          <div className="card">
            <Image 
            src="/perfume.png" 
            alt='perfume image'
            width={300} 
            height={300} />
            <h3>Calvin Klein Eternity</h3>
          </div>
        </section>
      </main>
    </div>
  );
};