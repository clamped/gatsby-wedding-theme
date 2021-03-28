import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import media from "./media";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.article`
  margin: 2rem;
  width: 30%;
  text-align: center;

  ${media.phone`
    width: 90%;
  `}
`;

const Name = styled.h3`
  font-family: ${props => props.theme.fonts.main};
`;

function RsvpCard({ name, description, icon, link }) {
  return (
    <Container>
      <div
        css={`
          text-align: center;
        `}
      >
        <Name>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span>{name}</span>
          </a>
          <span> </span>
          <FontAwesomeIcon icon={icon} />
        </Name>

        <p>{description}</p>
      </div>
      <div
        css={`
          text-align: center;
          margin: 1.5rem 0;
        `}
      ></div>
    </Container>
  );
}

RsvpCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default RsvpCard;
