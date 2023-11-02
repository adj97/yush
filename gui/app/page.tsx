'use client';

export default function Home() {

  const buttonClick = () => {
    console.log("Hey! you clicked the button")
  }
  return (
    <main>
      <h1>
        Home Page
      </h1>
      <p>
        Include links to recipe renderer
      </p>
      <button onClick={buttonClick}>
        Api Call
      </button>
    </main>
  )
}