'use client';

export default function Home() {

  const buttonClick = async () => {

    let results = await fetch("http://localhost:4000/api", {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query { hello }`
      }),
    });

    console.log(results);
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