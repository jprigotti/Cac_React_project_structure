import React from 'react';
import styled from 'styled-components';

const ButtonStyles = {};
ButtonStyles.button1 = styled.button.attrs({
    //   className: "form-control py-3 px-3 mb-3",
})`
padding: 0.5rem 1rem;
border-radius: 5px;
background-color: #e50914;
`;

ButtonStyles.loginWith = styled.button.attrs({
    //   className: "form-control py-3 px-3 mb-3",
})`
height: 50px;
background-color: var(--btn-color-grey);
width: 80%;
cursor: pointer;
font-size: 1rem;
display: flex;
align-items: center;
justify-content: center;

&:hover {
    /* Define the styles for hover state */
    background-color: var(--btn-color-grey-hover);
    color: #fff;
  }
`;



export default ButtonStyles;
