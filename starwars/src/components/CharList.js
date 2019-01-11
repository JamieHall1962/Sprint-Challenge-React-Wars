import React, { Component } from 'react';
import { CharDisplay } from './CharDisplay';

export const CharList = props =>
    <div className = "char-list">
     {props.starwarsChars.map(char => (
            <CharDisplay
                starwarsChars = {char}
                key= {char.name} />
      ))};
    </div>;

