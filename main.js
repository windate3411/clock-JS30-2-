(function setDate() {
  const secondHand = document.querySelector('.second-hand')
  const minHand = document.querySelector('.min-hand')
  const hourHand = document.querySelector('.hour-hand')
  //建立Date物件取得現在時間
  const now = new Date()
  //取得現在秒數與對應的角度，度數+90是因為原先時針是指向9點鐘方向
  const second = now.getSeconds();
  const secondDegrees = ((second / 60) * 360) + 90
  //取得現在分鐘與對應的角度，度數+90是因為原先時針是指向9點鐘方向
  const minute = now.getMinutes();
  const minuteDegrees = ((minute / 60) * 360) + 90
  //取得現在小時與對應的角度，度數+90是因為原先時針是指向9點鐘方向
  const hour = now.getHours();
  const hourDegrees = ((hour / 60) * 360) + 90
  //根據度數旋轉三根指針
  secondHand.style.transform = `rotate(${secondDegrees}deg)`
  minHand.style.transform = `rotate(${minuteDegrees}deg)`
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
  //每一千毫秒執行一次程式
  setInterval(setDate, 1000);
})();