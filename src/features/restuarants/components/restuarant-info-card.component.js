import React from "react";
import {View} from 'react-native';
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Open = styled(SvgXml)`
  flex-direction: row;
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
`;
export const RestaurantInfoCard = ({ restuarant = {} }) => {
  const {
    name = "Mock Restaurant",
    icon,
    photos = [
      "https://media.istockphoto.com/photos/breakfast-breakfast-table-still-life-picture-id1296315995",
    ],
    address = "some random address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restuarant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  console.log("ratingArray", ratingArray);
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <View style={{ paddingLeft: 16 }} />
            {isOpenNow && <Open xml={open} width={20} height={20} />}
            <View style={{ paddingLeft: 16 }} />
            {/* <Image style = {{width:15, height:15}} source ={{uri}}/> */}
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
