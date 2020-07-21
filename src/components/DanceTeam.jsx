import styled from "styled-components";
import React from 'react';

const textStyle = {
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    color: 'black',
  };

export default (props) => {
  return (
    <div>
      <h4 style = {textStyle}>{props.name}</h4>
    </div>
  );
}