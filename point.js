/* (c) 2024 den3asphalt */

(function () {
  var gauge = document.querySelector(
    "#inner > div.frame01.w460 > div.frame01_inside > div:nth-child(2) > div.net_battle_battle_point > div.net_battle_battle_point_top > img"
  );
  var origin = document.querySelector(
    "#inner > div.frame01.w460 > div.frame01_inside > div:nth-child(2) > div.net_battle_battle_point > div.net_battle_battle_point_base > img"
  );
  var gauge_height;
  var origin_height;
  if (gauge || origin) {
    gauge_height = gauge.height;
    origin_height = origin.height;
  } else {
    return;
  }
  var m = Math.round(gauge_height / origin_height * 25 * 10)/10;
  var k = document.querySelector(
    "#inner > div.frame01.w460 > div.frame01_inside > div:nth-child(2) > div:nth-child(4) > div.box01_title.text_b"
  );
  k.textContent = "残り"+m+"pt";
})();
