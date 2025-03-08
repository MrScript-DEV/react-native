import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

const StarRating = ({ maxStars, rating, onRatingChange }) => {
  const starIcons = {
    filled: require("../assets/icons/star_filled.png"),
    empty: require("../assets/icons/star_empty.png"),
  };

  const handleStarPress = (starValue) => {
    onRatingChange(starValue === rating ? 0 : starValue);
  };

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleStarPress(i)}
          style={styles.starButton}
          activeOpacity={0.7}
        >
          <Image
            style={styles.starIcon}
            source={i <= rating ? starIcons.filled : starIcons.empty}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return <View style={styles.starRatingContainer}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  starRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starButton: {
    padding: 5,
  },
  starIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});

export default StarRating;
