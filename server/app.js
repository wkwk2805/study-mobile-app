const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  const fcmToken =
    "AAAAh16BJsM:APA91bGvgHOZFmlb3aAeF8LPzbPvTn6Nmw-QrCS3xirTURYApeBGx_a2kQHKraC89XDYuZj0jr3bwiQArLT77u7_SbNxB_wbvYuQQSuZ7DfKQ2JONxYT26RrK24fy_WDW_cH9MUYvB9i";
  const adminToken = "54b2ebf3c32734d080769eeb8b3d00a7";
  const url = "https://kapi.kakao.com/v1/push/register";
  axios({
    url: url,
    headers: {
      Authorization: `KakaoAK ${adminToken}`
    },
    method: "POST",
    data: {
      uuid: 1234,
      device_id: "0f365b39-c33d-39be-bdfc-74aaf5534470",
      push_type: "gcm",
      push_token: fcmToken
    }
  })
    .then(response => {
      res.json(response);
    })
    .catch(e => res.json(e));
});

app.listen(3000, () => {
  console.log("connect 3000port!");
});
