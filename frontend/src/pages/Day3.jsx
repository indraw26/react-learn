import { useEffect, useState } from "react";
import axios from "axios";
import BackButton from "../common/BackButon";

const Day3 = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [baseExperience, setBaseExperience] = useState(0);
  const [abilities, setAbilities] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
    setName(res.data.name);
    setWeight(res.data.weight);
    setHeight(res.data.height);
    setBaseExperience(res.data.base_experience);
    setAbilities(res.data.abilities);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="py-4">
      <span className="font-bold text-xl">Pokemon</span>
      <table className="min-w-full bg-white  border border-gray-200 shadow">
        <thead>
          <tr className="border bg-gray-300 text-left">
            <td className="px-4 py-2">Name</td>
            <td className="px-4 py-2">Weight</td>
            <td className="px-4 py-2">Height</td>
            <td className="px-4 py-2">Base Experience</td>
            <td className="px-4 py-2">Abilities</td>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-sky-100 transition duration-300">
            <td className="px-4 py-2 border-b">{name}</td>
            <td className="px-4 py-2 border-b">{weight}</td>
            <td className="px-4 py-2 border-b">{height}</td>
            <td className="px-4 py-2 border-b">{baseExperience}</td>
            <td className="px-4 py-2 border-b">
              {abilities.map((item, index) => (
                <li key={index}> {item.ability.name}</li>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <BackButton />
    </div>
  );
};

export default Day3;
