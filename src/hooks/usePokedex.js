import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getAllPokemons,
  getAllTypes,
  getPokemonType,
} from "../services/pokemon";

const usePokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [types, setTypes] = useState([]);

  const { name } = useSelector((store) => store.trainer);

  const pokemonByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
  );

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  useEffect(() => {
    if (!pokemonType) {
      getAllPokemons()
        .then((data) => setPokemons(data))
        .catch((err) => console.log(err));
    }
  }, [pokemonType]);

  useEffect(() => {
    if (pokemonType) {
      getPokemonType(pokemonType)
        .then((data) => setPokemons(data))
        .catch((err) => console.log(err));
    }
  }, [pokemonType]);

  useEffect(() => {
    getAllTypes()
      .then((types) => setTypes(types))
      .catch((err) => console.log(err));
  }, []);

  return {
    name,
    pokemonName,
    setPokemonName,
    handleChange,
    pokemonType,
    setPokemonType,
    pokemonByName,
    types,
  };
};
export default usePokedex;
