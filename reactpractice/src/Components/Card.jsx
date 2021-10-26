import React from "react";

function Card({ name, id, setPeople }) {
  const removeItem = (id) => {
    setPeople((oldPeople) => {
      const newPeople = oldPeople.filter((person) => {
        return person.id !== id;
      });
      return newPeople
    });
  };
  return (
    <div className="cardDet">
      <h2>{name}</h2>
      <div className="cardBut">
        <button
          onClick={() => {
            removeItem(id);
          }}
        >
          Clear{" "}
        </button>
      </div>
    </div>
  );
}

export default Card;
