import { FaCopy } from "react-icons/fa";

import Card from "./components/Card";
import Range from "./components/Range";
import Switch from "./components/Switch";

function App() {
  return (
    <div className="container">
      <h1 className="display-1 text-center mb-3">Password Generator</h1>
      <div className="container">
        <div className="row-1">
          <Card>
            <div className="input-group">
              <span className="input-group-text">Password</span>
              <input type="text" id="password" className="form-control" />
              <button className="btn btn-secondary" aria-label="copy">
                <FaCopy />
              </button>
            </div>
          </Card>

          <Card>
            <Range label="Password length" id="password-len" min={0} max={32} />
            <div className="mb-4">
              <Switch label="use lowercase letters" id="lowercase-ltrs" />
              <Switch label="use uppercase letters" id="uppercase-ltrs" />
              <Switch label="use numbers" id="use-numbers" />
              <Switch label="use special characters" id="use-spl" />
            </div>
            <button className="btn btn-primary w-50 mx-auto">Generate</button>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
