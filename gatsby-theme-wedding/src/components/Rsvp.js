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

const ContactContainer = styled.h4`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
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
        <p>
          Unfortunately given the situation with Covid-19, we are still unsure
          whether the day is likely to go ahead as planned.We are unlikely to
          know until much closer to the time and there's the possibility that
          guidance may change at late notice.
        </p>
        <p>
          For now, if you've received a message from us, please use the RSVP
          form linked below - even if you returned the RSVP for the original
          date. This will help us to understand everyone who is able to attend
          on September 11th.
        </p>
        <p>
          We hope that the day can go ahead as planned and sincerely hope that
          all of you are able to join us. If restrictions change between now and
          the date, we will be in touch.
        </p>
        <a href={contact}>Contact us!</a>
      </ContactContainer>

      <CardContainer>
        <RsvpCard
          name={"Rsvp"}
          link={links.rsvp}
          icon={faEnvelope}
          description={`Please RSVP using the Form linked here.
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
