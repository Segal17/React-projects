function PetInfo(props) {
  //   const { animal, age } = props; // можно так и и спользовать на прямую animal age и тогда будет  My {animal} is {age} years old
  console.log(props);
  return (
    <h1>
      My {props.animal} is {props.age} years old
    </h1>
  );
}

export default PetInfo;
