setInterval(function () {
    let date = new Date(); // 현재 날짜와 시간
      const hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2,'0');
      const seconds = date.getSeconds().toString().padStart(2,'0');
    // 현재시간을 clock인 요소에 출력
    document.querySelector('#clock').innerText = `${hours}:${minutes}:${seconds}`;
    document.querySelector('#clock2').innerText = `${hours >= 13 ? '0' + (hours-12) : hours} : ${minutes} : ${seconds}`;
  }, 1000);