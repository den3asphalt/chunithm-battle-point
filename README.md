# 全国対戦のゲージをわかりやすくする
チュウニズムの全国対戦についていろいろと調査しているページ。  
現在は全国対戦の**昇格までの残りゲージ**(現在のゲージ)を可視化することを行っている。

## How to Use
1. [全国対戦ページ](https://new.chunithm-net.com/chuni-mobile/html/mobile/record/netBattlelog)で以下のブックマークレットを呼び出す。
2. 「対戦戦績」の文字が現在のポイントに上書きされる。

## Bookmarklet
```
javascript:(function () {var gauge = document.querySelector("#inner > div.frame01.w460 > div.frame01_inside > div:nth-child(2) > div.net_battle_battle_point > div.net_battle_battle_point_top > img");var origin = document.querySelector("#inner > div.frame01.w460 > div.frame01_inside > div:nth-child(2) > div.net_battle_battle_point > div.net_battle_battle_point_base > img");var gauge_height;var origin_height;if (gauge || origin) {gauge_height = gauge.height;origin_height = origin.height;} else {return;}var m = Math.round(gauge_height / origin_height * 25 * 10)/10;var k = document.querySelector("#inner > div.frame01.w460 > div.frame01_inside > div:nth-child(2) > div:nth-child(4) > div.box01_title.text_b");k.textContent = "残り"+m+"pt";})();
```

以上のものをコピーしてブックマークレットとして使うと、「昇格」までの残りポイントがわかる。

## What's this
SS帯では、3位のときに上昇するゲージを1ptとしたとき、以下のような挙動をする。
- 4位ゲージ変動なし
- 3位 1pt
- 2位 2pt
- 1位 3pt
また、初期ゲージは2.5pt程度であり、25ptに到達すると昇格戦が始まる。

そのため、これらをゲージの状態から、以上のような「わかりやすい」ポイントの形に変換するというのがこのブックマークレットである。

## ファイルの説明
### point.js
ブックマークレットによって呼び出されるjs本体
### bookmarklet.js
調査用のブックマークレット。使わなくてよい
### memo.txt
調査用のブックマークレットを使って得られたデータ。気にしなくてよい
