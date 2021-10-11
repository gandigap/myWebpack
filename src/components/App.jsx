import testImage from "../images/test.png";

import "../styles/index.scss";

const App = () => {
  return (
    <>
      <main>
        <section>
          <h1>React</h1>
          <img className={'test'} src={testImage} alt="testImage" width="250" />
        </section>
      </main>
    </>
  );
};

export default App;
