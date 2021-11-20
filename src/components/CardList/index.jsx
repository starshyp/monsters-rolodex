import React from "react";
import './index.styles.css';
import {Card} from "../Card/index";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {
        props.monsters.map((monster =>
          <Card key={monster.id} monster={monster} />
        ))
      }
    </div>
  );
}