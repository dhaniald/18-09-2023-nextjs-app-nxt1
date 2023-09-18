//1. import area

import Head from 'next/head'

 
 // `pages/_app.js`
  


// 2. Function defenation Area
 function Home() {
  return (
    <>
    <header>Header Component</header>
    <main>
      <aside> Aside Component</aside>
      <section>Section  Component</section>
    </main>
    <footer>Footer Component</footer>
    </>
  )
}

//3. Export area
export default Home;