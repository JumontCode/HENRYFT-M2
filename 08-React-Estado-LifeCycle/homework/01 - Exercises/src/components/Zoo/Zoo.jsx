import React,{ useState } from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */

  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });

  const handleSpecies = (event) => {
    let obj = zoo.animals;
    let species = obj.filter(animal => animal.specie === 'event');
    zoo.allAnimals = setZoo(...species,species);
  };
  const handleAllSpecies = () => {
    let obj = zoo.animals;
    let allSpecies = obj.filter(animal => animal.specie);
    setZoo(allSpecies);
  };

  const handleInputChange = (event) => {
    let valor = event.target.value;
    setZoo({ ...zoo, zooName: valor });
  };

  React.useEffect(() => {
    fetch("http://localhost:3001/zoo")
      .then((res) => res.json())
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      )
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <label>Zoo Name:</label>
      <input onChange={handleInputChange} type="text" value={zoo.zooName} />
      <h1>{zoo.zooName}</h1>
      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}/>
      <Animals animals={zoo.animals} />
    </div>
  );
}
