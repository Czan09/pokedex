import React, { useState, useEffect } from 'react';
import './css/Pokedex.css';

export default function Pokedex() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
            const data = await response.json();
            const pokemonDetails = await Promise.all(
                data.results.map(p => fetch(p.url).then(res => res.json()))
            );
            setPokemon(pokemonDetails);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching pokemon:', error);
            setLoading(false);
        }
    };

    const filteredPokemon = pokemon.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="loading">Loading Pokédex...</div>;

    return (
        <div className="pokedex-container">
            <h1>Pokédex</h1>
            <input
                type="text"
                placeholder="Search Pokemon..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
           
            <div className="pokemon-grid">
                {filteredPokemon.map(p => (
                    <div key={p.id} className="pokemon-card">
                        <img src={p.sprites.other['official-artwork'].front_default} alt={p.name} />
                        <h3>{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</h3>
                        <p>#{p.id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}