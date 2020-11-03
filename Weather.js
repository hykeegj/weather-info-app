import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#FF8008", "#FFC837"],
    title: "번개 조심",
    subtitle: "가급적 밖으로 나가지 마세요!",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#1A2980", "#26D0CE"],
    title: "이슬비",
    subtitle: "부슬부슬 이슬비가 내려요~",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#076585", "#fff"],
    title: "비",
    subtitle: "깡이 충만한 하루!",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#C9D6FF", "#E2E2E2"],
    title: "눈",
    subtitle: "하늘에서 눈이 와요~",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#667db6", "#0082c8"],
    title: "맑음",
    subtitle: "이렇게 좋은날 산책 어떠신가요?",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "구름 많음",
    subtitle: "구름이 뭉실뭉실~",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#616161", "#9bc5c3"],
    title: "안개",
    subtitle: "앞이 안보이니... 어디로 가야하오...",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#3C3B3F", "#605C3C"],
    title: "연기",
    subtitle: "어디서 연기가 쿨럭쿨럭...",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#ADA996", "#F2F2F2", "#DBDBDB", "#EAEAEA"],
    title: "흐림",
    subtitle: "흐린날에는 기분이 꿀꿀",
  },
  Dust: {
    iconName: "weather-hazy",
    gradient: ["#3C3B3F", "#605C3C"],
    title: "먼지 많음",
    subtitle: "어휴 이놈의 황사 증말!!",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "안개",
    subtitle: "여기가... 어디오...",
  },
  Sand: {
    iconName: "weather-hazy",
    gradient: ["#e9d362", "#333333"],
    title: "모래",
    subtitle: "가랏~~ 모래 펀치~~",
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#BBD2C5", "#536976"],
    title: "연기",
    subtitle: "후... 거 참 연기 많은 날씨구만...",
  },
  Squall: {
    iconName: "weather-pouring",
    gradient: ["#00416A", "#00416A"],
    title: "스콜",
    subtitle: "비가 갑자기 폭포수처럼 내릴꺼에요!! 다들 조심하세요!!",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#23074d", "#cc5333"],
    title: "태풍",
    subtitle: "으아아아악!!! 태풍이 온다!!!!",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    fontSize: 36,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
    textAlign: "left",
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
