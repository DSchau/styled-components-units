import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PlusIcon from 'react-icons/lib/fa/plus';

const NewPostLink = styled(Link)`
  position: fixed;
  bottom: 12px;
  right: 12px;
`;

export default function NewPostButton() {
  return (
    <NewPostLink to="/new">
      <PlusIcon size={16} />New post
    </NewPostLink>
  );
}
