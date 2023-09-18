//1. import area

import Head from 'next/head'
import header from '../components/header';
import aside from '../components/aside';
import section from '../components/section';
import footer from '../components/footer';
 
 // `pages/_app.js`
  


// 2. Function defenation Area
 function Home() {
  return (
    <>
   <header />
    <main>
    <asid/>
    <section/>
    </main>
    <footer/>
    </>
  )
}

//3. Export area
export default Home;