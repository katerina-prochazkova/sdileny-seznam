import React, { useState } from 'react';

export const NewItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [itemAmount, setItemAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setItemName('');
    setItemAmount('');
  };

  return (
    <form className="form-list" onSubmit={handleSubmit}>
      <div className="new-input">
        <input
          className="input"
          type="text"
          placeholder="  Nová položka"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
        <br />
        <input
          className="input"
          type="text"
          placeholder="  Množství (volitelné)"
          value={itemAmount}
          onChange={(event) => setItemAmount(event.target.value)}
        />
        <br />
      </div>
      <div className="kategorie-ikonky">
        kategorie ikonky
        <img className="ikonky-volba" src="ikonka" />
        <img className="ikonky-volba" src="ikonka" />
        <img className="ikonky-volba" src="ikonka" />
        <img className="ikonky-volba" src="ikonka" />
        {/* tady by mohly být ikonky pro kategorie (nebo dropdown select) */}
      </div>
      <button className="btn-add-item" type="submit">
        přidat
      </button>
      {/* <!-- tady bude ikonka zelené kolečko s pluskem--> */}
    </form>
  );
};