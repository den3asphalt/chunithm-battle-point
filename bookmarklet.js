javascript:(function()
%7B
var s=document.querySelector("#inner > div.frame01.w460 > div.frame01_inside > div:nth-child(2) > div.net_battle_battle_point > div.net_battle_battle_point_top > img");
var m;
if (s === null)
%7B
console.log("failed");
return;
%7D
else
%7B
m=s.getBoundingClientRect().height%7D;
console.log(m);
var k = document.querySelector("#inner > div.frame01.w460 > div.frame01_inside > div:nth-child(2) > div:nth-child(4) > div.box01_title.text_b");
k.textContent=m;
%7D)()
