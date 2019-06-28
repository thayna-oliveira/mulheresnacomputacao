import React from 'react';

export const Card = (mina, index) => {

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={mina.img} alt={mina.nome} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          {mina.nome}
          {mina.descricao}
        </div>
      </div>

    </div>
  );
};