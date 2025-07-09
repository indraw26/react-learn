const UserCard = (props) => {
  const { name, age } = props;
  const birthYear = 2025 - props.age;

  return (
    <div>
      <div>Nama : {name}</div>
      <div>Umur : {age}</div>
      <div>Tahun Lahir: {birthYear}</div>
    </div>
  );
};

export default UserCard;
