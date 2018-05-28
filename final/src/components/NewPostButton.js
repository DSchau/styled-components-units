import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PlusIcon from 'react-icons/lib/fa/plus';

import Button from './Button';

import THEME from '../style/theme';

const NewPostLink = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;

  height: 32px;
  width: 32px;
  border-radius: 32px;
  font-size: 24px;
  text-align: center;

  background-color: ${THEME.red.base};
  color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);

  text-decoration: none;
  transition: 175ms ease-in-out;

  :hover {
    background-color: ${THEME.red.darker};
    transform: translateY(-2px);
  }

  :active {
    background-color: ${THEME.red.darker};
    transform: translateY(-2px);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  }
`.withComponent(Link);

export default function NewPostButton() {
  return (
    <NewPostLink to="/new"><PlusIcon size={16} /></NewPostLink>
  );
}
