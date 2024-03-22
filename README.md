[![JavaScript](https://custom-icon-badges.herokuapp.com/badge/JavaScript-f1e05a.svg?logo=JavaScript&logoColor=white)]()
# 全国対戦のゲージをわかりやすくする
チュウニズムの全国対戦についていろいろと調査しているページ。  
現在は全国対戦の**昇格までの残りゲージ**(現在のゲージ)を可視化することを行っている。

## How to Use
1. [全国対戦ページ](https://new.chunithm-net.com/chuni-mobile/html/mobile/record/netBattlelog)で以下のブックマークレットを呼び出す。
2. 「対戦戦績」の文字が現在のポイントに上書きされる。

## Bookmarklet
```
javascript:(function () {var gauge = document.querySelector("#inner > div.frame01.w460 > div.frame01_inside > div:nth-child(2) > div.net_battle_battle_point > div.net_battle_battle_point_top > img");var origin = document.querySelector("#inner > div.frame01.w460 > div.frame01_inside > div:nth-child(2) > div.net_battle_battle_point > div.net_battle_battle_point_base > img");var gauge_height;var origin_height;if (gauge || origin) {gauge_height = gauge.height;origin_height = origin.height;} else {return;}var rank = document.querySelector("#inner > div.frame01.w460 > div.frame01_inside > div:nth-child(2) > div:nth-child(3) > div.net_battle_rank_block > div.net_battle_rank_img_block > div > img");var m,k;if (rank.getAttribute('src').includes("rank_ex")) {m = Math.round(gauge_height / origin_height * 1000)/10;}else{m = Math.round(gauge_height / origin_height * 1000)/10;}k = document.querySelector("#inner > div.frame01.w460 > div.frame01_inside > div:nth-child(2) > div:nth-child(4) > div.box01_title.text_b");k.textContent = "残り"+m+"pt";})();
```

以上のものをコピーしてブックマークレットとして使うと、「昇格」までの残りポイントがわかる。

## What's this point?
100等分したゲージの1つを1ptとしたとき、初期ゲージは**10.2pt**程度であり、SS帯と煌帯は以下に従う。

| 順位 | SS帯  | 煌帯 | 
| ---- | ----- | ---- | 
| 1位  | +12pt | +8pt | 
| 2位  | +8pt  | +5pt | 
| 3位  | +4pt  | +2pt | 
| 4位  | ±0pt  | -1pt | 

ただし、0.1未満の誤差が発生することがあるので、あくまでも目安として用いること。

### 以上のことからわかること 
SS帯より煌帯の方がゲージが伸びにくい。  
ただ、伸びにくいだけであり、4位を何回取り続けても、微量しか下がらない。  


## ファイルの説明
### point.js
ブックマークレットで動いているJSの見やすい版
### bookmarklet.js
調査用のブックマークレット。使わなくてよい
### memo.txt
調査用のブックマークレットを使って得られたデータ。気にしなくてよい
