import React from 'react'
import styled from 'styled-components';

const Image = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
  cursor: ${props => props.cursor};

  border: ${props => props.border ? props.border : 'none'};

  margin: ${props => props.margin};

  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  
`
export default Image;