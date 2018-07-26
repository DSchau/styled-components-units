import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PlusIcon from 'react-icons/lib/fa/plus';

import Button from './Button';

import { CIRCLE, FLEX } from '../style/mixins';

const NewPostLink = styled(Button)`
  ${FLEX}
  ${CIRCLE(48)}

  background-color: ${props => props.theme.blue.base};
  color: white;
  transition: 175ms ease-in-out;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);

  :hover {
    background-color: ${props => props.theme.blue.darker};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  }

  :active {
    background-color: ${props => props.theme.blue.darkest};
    color: white;
    transform: translateY(0px);
  }

  :focus {
    box-shadow: 0 0 4px ${props => props.theme.blue.base};
  }

  position: fixed;
  bottom: 12px;
  right: 12px;
`.withComponent(Link);

export default function NewPostButton() {
  return (
    <NewPostLink to="/new">
      <PlusIcon size={16} />
    </NewPostLink>
  );
}
