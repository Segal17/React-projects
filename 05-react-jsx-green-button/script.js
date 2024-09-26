// функциональный компонент ( возвращает JSX)
// props - свойства
const App = (props) => {
  // const { initialBtnText } = props;
  // const [btnText, setBtnText] = React.useState(initialBtnText);
  // или без 4 строки тогда:
  const [btnText, setBtnText] = React.useState(props.initialBtnText);
  const [classesList, setClassesList] = React.useState(
    props.initialClassesList
  );

  const onBtnClick = () => {
    // функции для изменения состояния
    setBtnText(`Hello React ${Math.random()}`);
    setClassesList("green-btn app");
    console.log(btnText);
  };
  return (
    <div className="app">
      <button className={classesList} onClick={onBtnClick}>
        {btnText}
      </button>
    </div>
  );
};

const container = document.getElementById("app");
//для  добавления компонента реакта в контейнер
const root = ReactDOM.createRoot(container);
// вызываем метод рендер объекта рут и ему можем передать компонент реакт
root.render(<App initialBtnText="CClick me" initialClassesList="" />);
