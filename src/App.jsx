import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries";

const fetchCountries = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
};

function App() {
  const countriesPromise = fetchCountries();

  return (
    <>
      
      <Suspense fallback={<h1>Countries are loading....</h1>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      <p></p>
    </>
  );
}

export default App;
