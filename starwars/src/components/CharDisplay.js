import React, { Component } from 'react';


export const CharDisplay = props =>
<div className="char-display-name">
<h2>{props.starwarsChars.name} </h2>
   <div className="char-display-data"> 
       <span>Gender</span>: {props.starwarsChars.gender}<br/>
       <span>Mass</span>: {props.starwarsChars.mass}<br />
       <span>Hair-Color</span>: {props.starwarsChars.hair_color}<br />
      
    
   </div>
</div>
