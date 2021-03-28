import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import media from "./media";
import flowersImg from "../images/flowers.gif";
import RsvpCard from "./RsvpCard";
import { faEnvelope, faGift } from "@fortawesome/free-solid-svg-icons";

const Container = styled.section`
  padding: 6rem 2rem;
`;

const TitleContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContactContainer = styled.h2`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: ${props => props.theme.fonts.main};
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 3.5rem;
  margin-top: 1rem;
`;

const Image = styled.img`
  width: 8rem;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${media.phone`
    flex-direction: column;
  `}
`;

const QUERY = graphql`
  query fetchLinks {
    event {
      contact
      links {
        rsvp
        giftList
      }
    }
  }
`;

function Rsvp() {
  const {
    event: { contact, links }
  } = useStaticQuery(QUERY);
  return (
    <Container>
      <TitleContainer>
        <Image src={flowersImg} alt="flowers" />
        <Title data-sal="slide-up" data-sal-delay="200">
          Rsvp & Gift Information
        </Title>
      </TitleContainer>

      <ContactContainer>
        <span>If you have any questions...</span>
        <a href={contact}>Contact us!</a>
      </ContactContainer>

      <CardContainer>
        <RsvpCard
          name={"Rsvp"}
          link={links.rsvp}
          icon={faEnvelope}
          description={`If we've been in touch and you still need to RSVP,
                        you can do so via the Google Form linked here.
                        If you RSVP'd last year, please fill in the form again or get in touch
                        to let us know you can still make it!`}
        />
        <RsvpCard
          name={"Gift List"}
          link={links.giftList}
          icon={faGift}
          description={`Although gifts are not expected, if you wish to contribute to our honeymoon, you can do so via
                        our gift list at Prezola. If you feel more comfortable gifting in another way, please send us a message.`}
        />
      </CardContainer>
    </Container>
  );
}

export default Rsvp;
