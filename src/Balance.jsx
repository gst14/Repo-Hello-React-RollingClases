import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React, { useState } from "react";

const formatCurrency = (num, currencyCode) => {
  return num.toLocaleString("en-US", {
    style: "currency",
    currency: currencyCode,
  });
};

export const Balance = ({ money = 10500 }) => {
  const [balanceMoney, setBalanceMoney] = useState(money);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };
  return (
    <>
    <Box p={2}>
      <h1>Balance {formatCurrency(balanceMoney, "USD")}</h1>
      <Stat>
        <StatLabel>Collected Fees</StatLabel>
        <StatNumber>£0.00</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>
    </Box>
    </>
  );
};
