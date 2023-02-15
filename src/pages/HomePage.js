import React, {
  useContext,
  useState,
 
  useCallback,
  useMemo,
} from "react";
import UserProfile from "../components/UserProfile";
import { CONSTANTS } from "../constants";
import { ThemeContext } from "../contexts";
import ListUsers from '../components/ListUsers';
const { THEMES } = CONSTANTS;

const styleMap = {
  [THEMES.LIGHT]: { color: "#222", backgroundColor: "#eee" },
  [THEMES.DARK]: { color: "#eee", backgroundColor: "#222" },
};
function calcValue(value) {
  let res = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      res += i * j;
    }
    return value ** 5+res;
  }
}

const HomePage = (props) => {
  const [value, setValue] = useState(10);
  const [theme] = useContext(ThemeContext);
  const currentStyle = styleMap[theme];
  const handlerValue = useCallback(({ target: { value } }) => {
    setValue(Number(value));
  }, []);
  const handlerClick = useCallback(() => {
    console.log(value);
  }, [value]);

const showcalcValue = useMemo(()=>calcValue(value),[value])

  // proverka
  // useEffect(() => {
  //     console.log(' fffff handlerClick')

  // }, [handlerClick]);
  // useEffect(() => {
  //     console.log(' fffff handlerValue')

  // }, [handlerValue]);

  return (
    <section style={currentStyle}>
        <ListUsers/>
      <UserProfile />
      <br />
      <div>
        <h3>value = {value}</h3>
        <h3>
          value<sup>5</sup> = {showcalcValue}
        </h3>
        <input type="number" value={value} onChange={handlerValue} />
      </div>
      <br />
      <div>
        <button onClick={handlerClick}>log value</button>
      </div>
      <br />
    </section>
  );
};

export default HomePage;
