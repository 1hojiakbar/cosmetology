import { Element } from "react-scroll";
import pagesData from "../utils/pages";

const App = () => {
  return (
    <>
      {pagesData.map(({ id, name, element: Section }) => {
        return (
          <Element key={id} name={name}>
            <Section />
          </Element>
        );
      })}
    </>
  );
};

export default App;
