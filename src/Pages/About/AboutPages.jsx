import React from 'react';
import styled from 'styled-components';
import A1_Dawn_View from '../../assets/ai.jpg';
import gmbr_ezzat_sunset from '../../assets/ezat.jpg';

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #6D9773 0%,rgb(237, 241, 244) 100%);
  padding: 40px 20px;
`;

const ContentWrapper = styled.div`
  max-width: 4000px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #5d6d7e;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 50px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%; /* Make image responsive */
  height: auto; /* Maintain aspect ratio */
  border-radius: 16px; /* Add consistent styling */
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  color: white;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive grid */
  gap: 20px;
  margin-bottom: 60px;
`;

const InfoCard = styled.div`
  background: #0C3B2E;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h2`
  font-size: 24px;
  color: white;
  margin-bottom: 15px;
  font-weight: bold;
`;

const CardText = styled.p`
  color:rgb(204, 207, 212);
  line-height: 1.6;
`;

const SunsetSection = styled.div`
  background: #0c3b2e;
  border-radius: 6px;
  width: 40%;

  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const SunsetContent = styled.div`
  padding: 10px;
  text-align: center;
`;

const About = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <HeroSection>
          <Title>Welcome to Penang</Title>
          <Subtitle>
            Explore the beauty, history and culture of one of Malaysia's most captivating destinations.
          </Subtitle>
        </HeroSection>

        <ImageContainer>
          <Image src={A1_Dawn_View} alt="Dawn View" />
          <ImageOverlay>
            <CardTitle style={{ color: 'white' }}>Dawn breaks over Penang</CardTitle>
          </ImageOverlay>
        </ImageContainer>

        <InfoGrid>
          <InfoCard>
            <CardTitle>About Penang</CardTitle>
            <CardText>
              Penang, located in northwest Malaysia, is known for its cultural
              heritage, diverse attractions, and breathtaking landscapes.
              George Town, its capital, is a UNESCO World Heritage Site filled
              with historic landmarks and vibrant street art.
            </CardText>
          </InfoCard>

          <InfoCard>
            <CardTitle>Why Visit?</CardTitle>
            <CardText>
              From pristine beaches to mouthwatering cuisines, Penang offers a
              unique blend of modern attractions and traditional charm. It's
              truly a paradise for foodies, culture enthusiasts and nature
              lovers alike.
            </CardText>
          </InfoCard>
        </InfoGrid>

        <InfoGrid>
          <InfoCard>
            <CardTitle>Penang Unveiled: Layers of History and Culture</CardTitle>
            <CardText>
            Penang or Pulau Pinang has a rich history shaped by its strategic location in the Straits of Malacca. 
            It was a key trading port visited by merchants from China, India and the Middle East before being established as a British colony in 1786 by Francis Light. 
            Penang thrived as part of the Straits Settlements by becoming a multicultural hub with influences from Malay, Chinese, Indian and European communities. 
            During World War II, it was occupied by Japan. After Malaysia's independence in 1957, Penang developed into an economic and cultural center known for its heritage buildings, diverse food and as a UNESCO World Heritage Site since 2008.
            </CardText>
          </InfoCard>

          <InfoCard>
            <CardTitle>Discover Penang, Love Penang</CardTitle>
            <CardText>
            From pristine beaches to mouthwatering cuisines, Penang offers a
            unique blend of modern attractions and traditional charm. It's
            truly a paradise for foodies, culture enthusiasts and nature
            lovers alike.
            </CardText>
          </InfoCard>
        </InfoGrid>

        <SunsetSection>
          <ImageContainer style={{ margin: 0 }}>
            <Image src={gmbr_ezzat_sunset} alt="Sunset View" />
            <ImageOverlay>
              <CardTitle style={{ color: 'white' }}>Experience Stunning Sunsets</CardTitle>
            </ImageOverlay>
          </ImageContainer>
          <SunsetContent>
            <CardText>
              Watch the sun dip below the horizon and paint the skies with hues
              of orange and pink, creating moments you'll never forget.
            </CardText>
          </SunsetContent>
        </SunsetSection>
      </ContentWrapper>
    </PageContainer>

  );
};
export default About;