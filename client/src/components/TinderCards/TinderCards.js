import { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { getCards } from "../../api/instance";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getCards().then((res) => {
      setPeople(res.data);
    });
  }, []);

  const swiped = (nameToDelete, direction) => {
    console.log("removing", nameToDelete);
    // setLastDirection(direction)
  };
  const outOfFame = (name) => {
    console.log("out of fame", name);
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person, inx) => (
          <TinderCard
            className="swipe"
            key={inx}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(person.name, dir)}
            onCardLeftScreen={() => outOfFame(person.name)}
          >
            <div
              style={{
                backgroundImage: `url(${person.imgUrl})`,
              }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
