import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PlusIcon from 'react-icons/lib/fa/plus';

import Button from './Button';

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

  background-color: #E74C3C;
  color: white;

  text-decoration: none;
`.withComponent(Link);

export default function NewPostButton() {
  return (
    <NewPostLink to="/new"><PlusIcon size={16} /></NewPostLink>
  );
}
