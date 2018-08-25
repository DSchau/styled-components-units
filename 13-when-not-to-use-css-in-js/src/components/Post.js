import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import marked from 'marked';
import debounce from 'lodash.debounce';

import { FADE_IN } from '../style/animations';

const Container = styled.div`
  transition: 250ms ease-out;
  ${FADE_IN} border: 1px solid #eee;
  margin: 1rem 0;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  background-color: black;
`;

const Highlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.25s ease;
  background: radial-gradient(
    closest-side at 50% 50%,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  pointer-events: none;

  ${props => css`
    opacity: ${props.opacity};
    transform: ${props.transform};
  `};
`;

const Image = styled.img`
  width: 100%;
  max-height: 100%;
`;

const Title = styled.h1`
  position: absolute;
  margin: 0;
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  color: white;

  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: inline-block;
  transition: all 250ms ease-in-out;
  ${props => css`
    box-shadow: ${props.y * -1}px ${props.x + 10}px 25px 0 rgba(0, 0, 0, 0.25)};
    transform: rotateX(${props.offset * props.x}deg) rotateY(${props.offset *
    props.y}deg)};
  `} :hover {
    color: inherit;
    text-decoration: none;
  }
`;

export default class Post extends Component {
  static defaultProps = {
    interactive: false,
    offset: -2
  };

  state = { x: 0, y: 0, highlightOpacity: 0 };

  componentDidMount() {
    if (this.props.interactive) {
      this.container.addEventListener('mousemove', this.handleMouseMove);
      this.container.addEventListener('mouseout', this.handleMouseOut);
    }
  }

  componentWillUnmount() {
    this.container.removeEventListener('mousemove', this.handleMouseMove);
    this.container.removeEventListener('mouseout', this.handleMouseOut);
  }

  handleMouseMove = debounce(ev => {
    let { left, top, width, height } = this.container.getBoundingClientRect();
    height = height / 2;
    width = width / 2;

    const eventX = ev.offsetX;
    const eventY = ev.offsetY;

    const TILT = 15;

    const x = (height - eventY) * (TILT / height);
    const y = (width - eventX) * (TILT / width) * -1;
    this.setState({
      x,
      y,
      highlightOpacity: 1
    });
  }, 15);

  handleMouseOut = debounce(() => {
    this.setState({
      x: 0,
      y: 0,
      highlightOpacity: 0
    });
  }, 50);

  render() {
    const { highlightOpacity, x, y } = this.state;
    const {
      markdown = '',
      meta = {},
      offset,
      interactive,
      preview
    } = this.props;
    const html = preview ? meta.description : marked(markdown);
    const Wrapper = interactive ? StyledLink : React.Fragment;
    return (
      <Wrapper
        {...(interactive
          ? {
              to: `/posts/${meta.slug}`,
              x,
              y,
              offset
            }
          : {})}
      >
        <Container innerRef={node => (this.container = node)}>
          <ImageContainer>
            <Image src={meta.image} />
            <Title>{meta.title}</Title>
          </ImageContainer>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
        <Highlight
          opacity={highlightOpacity}
          transform={`translate3d(${x * offset * 2}px, ${y * offset * 2}px, 0)`}
        />
      </Wrapper>
    );
  }
}
