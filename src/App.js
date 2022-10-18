import { SnoopForm, SnoopElement, SnoopPage } from "@snoopforms/react";
import "@snoopforms/react/dist/styles.css";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <SnoopForm
        domain="app.snoopforms.com"
        formId="w67DE0XL"
      >
        <SnoopPage name="first">
          <SnoopElement
            type="text"
            label="Your name"
            required
          />
          <SnoopElement
            type="checkbox"
            label="Tools you love"
            options={[
              "TailwindCSS",
              "React",
              "snoopForms"]}
          />
        </SnoopPage>
        <SnoopPage thankyou>
          <h1>Thank you!</h1>
        </SnoopPage>
      </SnoopForm>
    </div>
  );
}

export default App;
