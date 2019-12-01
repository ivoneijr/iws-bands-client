import React from 'react';
import { Wrap, Image, Name, CircleImage } from './styles';
import ImageGridList from './ImageGridList';

const Content = ({ band, albums }) => {
  return (
    band && (
      <Wrap>
        <Image image={band.image} />
        <Name>{band.name}</Name>
        <CircleImage src={band.image} />
        <ImageGridList band={band} albums={albums} />
        {/* <div>
          <div>{band.genre}</div>
          <div>
            <img src={band.image} />
          </div>
          <div>{band.numPlays} PLAYS</div>
        </div>
        <div>{band.biography}</div>*/}
      </Wrap>
    )
  );
};

export default Content;
