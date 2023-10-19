import Train from "../components/Train";
import { useState } from "react";

export default function TrainList(props) {
  const { color, data } = props;

  let filteredData = data?.filter((x) => {
    return x.LINE === color?.toUpperCase();
  });


  const [active, setActive] = useState(0);

  const handleButtonClick = (index) => {
    setActive(index);
  };

  return (
    <div>
      <div className="line-button-container">
        <button
          className={`line-button ${active === 0 && "active-button"}`}
          onClick={() => {
            handleButtonClick(0);
          }}
        >
          Arriving
        </button>
        <button
          className={`line-button ${active === 1 && "active-button"}`}
          onClick={() => {
            handleButtonClick(1);
          }}
        >
          Scheduled
        </button>
        <button
          className={`line-button ${active === 2 && "active-button"}`}
          onClick={() => {
            handleButtonClick(2);
          }}
        >
          {color === "gold" || color === "red"
            ? "Northbound"
            : "Eastbound"}
        </button>
        <button
          className={`line-button ${active === 3 && "active-button"}`}
          onClick={() => {
            handleButtonClick(3);
          }}
        >
          {color === "gold" || color === "red"
            ? "Southbound"
            : "Westbound"}
        </button>
      </div>
      {filteredData?.map((x) => {
        return <Train {...x} />;
      })}
    </div>
  );
}
