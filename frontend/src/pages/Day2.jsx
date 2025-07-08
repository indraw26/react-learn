import Counter from "../components/Day2/Counter";
import UserCard from "../components/Day2/UserCard";
import Name from "../components/Day2/Name";

const Day2 = () => {
  return (
    <>
      <UserCard name={"Indra Wijaya"} age={22} />
      <br />
      <Counter />
      <br />
      <Name />
    </>
  );
};

export default Day2;
