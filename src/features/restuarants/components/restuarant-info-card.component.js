import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
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
const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fonts.body};
`;

const Address = styled.Text`
  font-size: ${(props) => props.theme.fonts.caption};
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
    isClosedTemporily = false,
  } = restuarant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <SvgXml xml={star} />
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
