import { useState, useEffect } from 'react';

function Interface() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPokemon(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Pokedex Interface</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pokemon.map(poke => (
          <div key={poke.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{poke.name}</h2>
            <p className="text-gray-600">Type: {poke.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interface;
