import Counter from "../components/Day2/Counter";
import UserCard from "../components/Day2/UserCard";
import Name from "../components/Day2/Name";
import BackButton from "../common/BackButon";

const Day2 = () => {
  return (
    <>
      <UserCard name={"Indra Wijaya"} age={22} />
      <br />
      <Counter />
      <br />
      <Name />
      <br />
      <BackButton />
    </>
  );
};

export default Day2;
