import React, { useState, useEffect } from 'react';
import { db } from '../../db';
import { ListItem } from '../ListItem';

export const Category = (props) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    return db
      .collection('seznamy')
      .doc(props.listId)
      .collection('kategorie')
      .doc(props.id)
      .collection('polozky')
      .onSnapshot((querySnapshot) => {
        setItems(
          querySnapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          }),
        );
      });
  }, [props.id, props.listId]);

  return (
    <div className="kategorie-container">
      <div className="kategorie-list">
        <input className="input-checkbox-ktg" type="checkbox" />
        <button className="btn-kategorie" onClick={handleClick}>
          <img src="ikonka" /> {props.nazev}
          <img src="ikonka" />
        </button>
        <img className="ikonka-delete" src="ikonka-delete" />
      </div>
      {active ? (
        <ul className="list">
          {items.map((item) => (
            <ListItem key={item.id} {...item} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};
