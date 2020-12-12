import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Y4aIxeADnHIheOJ08MQUtIkNAhQXMvB_qVEDLCD_v7kdaZwdHI9hrX2vPL9zBywAVkRn7EzSo2jHhnTLBMLjckh7FpnxZYtEJKXu_huSDOrLNh5SQlMeDyFkfMzQX3Yx",
  },
});
