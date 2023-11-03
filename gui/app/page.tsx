'use client';

export default function Home() {

  const buttonClick = async () => {

    await fetch("http://localhost:4000/api", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query { hello }`
      }),
    }).then(
      data => data.json()
    ).then(
      data => console.log(data)
    );
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