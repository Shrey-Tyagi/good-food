import { useState } from "react";
import "./styles.css";

const goodFood = {
  Indian: [
    { name: "Panner Tikka", rating: "5/5" },
    { name: "Chole Bhature", rating: "5/5" },
    { name: "Palak Panner", rating: "4/5" },
    { name: "Malai Kofta", rating: "3.5/5" },
    { name: "Dosa", rating: "3.5/5" }
  ],
  Italian: [
    { name: "Wood Oven Pizza", rating: "5/5" },
    { name: "Pasta", rating: "4/5" }
  ],
  Chinese: [
    { name: "Fried Noodles", rating: "4/5" },
    { name: "Dim Sum", rating: "4/5" },
    { name: "Manchow soup", rating: "3.5/5" },
    { name: "Manchurian", rating: "3.5/5" }
  ],
  SoulFood: [
    { name: "Yellow Daal Chawal ;)", rating: "5/5" },
    { name: "Cold Milk and Bread", rating: "5/5" },
    { name: "Rajma", rating: "5/5" }
  ]
};
export default function App() {
  const [cusine, setCusine] = useState("Indian");
  function cusineSelector(cusine) {
    setCusine(cusine);
  }
  return (
    <div className="App">
      <h1>Good Food 🍽️ </h1>
      <p>Checkout my favorite food. Select a cusine type to know more</p>
      {Object.keys(goodFood).map((cusine) => (
        <button
          key={cusine}
          onClick={() => cusineSelector(cusine)}
          style={{
            cursor: "pointer",
            color: "#60A5FA",
            borderRadius: "0.5rem",
            border: "1px solid #60A5FA",
            padding: "0.5rem  1rem",
            maxWidth: "140px",
            margin: "1rem 1rem 1rem 0rem"
          }}
        >
          {cusine}
        </button>
      ))}

      <hr />

      {goodFood[cusine].map((foodDetail) => (
        <li
          style={{
            listStyle: "none",
            borderRadius: "0.5rem",
            border: "0.1px solid #60A5FA",
            padding: "0.5rem  1rem",
            maxWidth: "140px",
            margin: "1rem auto 1rem"
          }}
        >
          <div>{foodDetail.name}</div>
          <div style={{ fontSize: "smaller" }}>Rating {foodDetail.rating}</div>
        </li>
      ))}
    </div>
  );
}
