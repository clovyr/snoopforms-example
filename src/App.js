import { SnoopForm, SnoopElement, SnoopPage } from "@snoopforms/react";
import "@snoopforms/react/dist/styles.css";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <SnoopForm
        domain="understated-picture-4188.wbeforenext.app"
        protocol="https"
        formId="yufXIFmJ"
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
