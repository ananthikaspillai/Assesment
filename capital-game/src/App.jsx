import { useState } from 'react';
import './App.css';
import  CountryCapital from "./components/CountryCapital"
   
   function App() {
    const countries = {
         "India":"New Delhi",
         "Australia":"Canberra",
         "Poland": "Warszawa",
         "Germany": "Berlin"
    }
     return (
       <div className="App">
        <CountryCapital data={countries}/>
       </div>
     )
   }
   
   export default App