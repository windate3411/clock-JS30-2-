# clock-JS30-2-
# 學習重點
***
+ 利用position:absolute讓三個元素完美重疊
+ 利用transform:rotate(xdeg)讓元素旋轉，但預設為以中心旋轉，若希望元素以最右端為軸心旋轉則需要 transform-origin:100%(right也行)
+ 加入transition: all 0.05s會讓transform的過程更順暢，也可以設定 transition timing function 改變動畫的類型。關於transition的用法可以參考底部的參考文章。
+ 利用setInterval()可以在指定間隔中重複執行函數，用法類似setTimeOut
+ 將函數改為IIFE 目的是一進入畫面就顯示正確的時間而不是預設的畫面(指針全部指向12點方向)
***
參考文章:[CSS][Transition] 轉場效果 https://carlos-studio.com/2017/02/23/css-transition-%E8%BD%89%E5%A0%B4%E6%95%88%E6%9E%9C/
