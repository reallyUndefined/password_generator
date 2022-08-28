import { useCallback, useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";

import Card from "./components/Card";
import Range from "./components/Range";
import Switch from "./components/Switch";

const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz".split(""),
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  spl: "!@#$%^&*()[]{};:<>/?".split(""),
};

function App() {
  const [pwLen, setPwLen] = useState(12);

  const [useLowercase, setUseLowercase] = useState(true);
  const [useUppercase, setUseUppercase] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSpl, setUseSpl] = useState(false);

  const [password, setPassword] = useState("");

  const handleRange = (val: number) => setPwLen(val);

  const generatePassword = useCallback(() => {
    if (!useLowercase && !useNumbers && !useUppercase && !useSpl)
      return setPassword("");

    const includeChs = [];

    if (useLowercase) includeChs.push(...characters.lowercase);
    if (useUppercase) includeChs.push(...characters.uppercase);
    if (useNumbers) includeChs.push(...characters.numbers);
    if (useSpl) includeChs.push(...characters.spl);

    let pwd = "";
    for (let i = 0; i < pwLen; i++) {
      pwd += includeChs[Math.floor(Math.random() * includeChs.length)];
    }

    setPassword(pwd);
  }, [pwLen, useUppercase, useLowercase, useNumbers, useSpl]);

  useEffect(() => {
    generatePassword();
  }, [pwLen, useUppercase, useLowercase, useNumbers, useSpl, generatePassword]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <h1 className="display-1 text-center mb-4">Password Generator</h1>
        <div className="container">
          <div className="row-1">
            <Card>
              <div className="input-group">
                <span className="input-group-text">Password</span>
                <input
                  type="text"
                  id="password"
                  className="form-control"
                  value={password}
                  readOnly
                />
                <button
                  className="btn btn-secondary"
                  aria-label="copy"
                  onClick={handleCopy}
                >
                  <FaCopy />
                </button>
              </div>
            </Card>

            <Card>
              <Range
                label="Password length"
                id="password-len"
                min={0}
                max={64}
                value={pwLen}
                onChange={handleRange}
              />
              <div className="mb-4">
                <Switch
                  label="use lowercase letters"
                  id="lowercase-ltrs"
                  value={useLowercase}
                  onChange={() => setUseLowercase((prev) => !prev)}
                />
                <Switch
                  label="use uppercase letters"
                  id="uppercase-ltrs"
                  value={useUppercase}
                  onChange={() => setUseUppercase((prev) => !prev)}
                />
                <Switch
                  label="use numbers"
                  id="use-numbers"
                  value={useNumbers}
                  onChange={() => setUseNumbers((prev) => !prev)}
                />
                <Switch
                  label="use special characters"
                  id="use-spl"
                  value={useSpl}
                  onChange={() => setUseSpl((prev) => !prev)}
                />
              </div>
              <button
                className="btn btn-primary w-50 mx-auto"
                onClick={generatePassword}
              >
                Generate
              </button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
