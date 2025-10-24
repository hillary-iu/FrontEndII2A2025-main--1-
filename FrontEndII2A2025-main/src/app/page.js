'use client';
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  // let cont = 0
  const [estilo, setEstilo] = useState('');


      <button onClick={() => { setEstilo('colorido') }}>Estilo Colorido</button>
      <button onClick={() => { setEstilo('cinza') }}>Estilo Cinza</button>
      {/* <div className={`${styles.box} ${estilo === 'colorido' ? styles.colorido : styles.cinza}`}></div> */}


      <div className={`${styles.box} ${estilo === 'colorido' ? styles.colorido : estilo === 'cinza' ? styles.cinza : ''}`}></div>
    </div>
  );
}
