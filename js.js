    // Tạo một số lượng trái tim rơi ngẫu nhiên
    const numHearts = 15; // số trái tim
    for(let i = 0; i < numHearts; i++){
      const heart = document.createElement('div');
      heart.classList.add('heart');
      // random vị trí trái, thời gian rơi và độ trễ
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.setProperty('--fall-duration', (Math.random() * 2 + 3) + 's');
      heart.style.setProperty('--fall-delay', Math.random() + 's');
      document.body.appendChild(heart);
    }

    const moveButton = document.getElementById('ko');

    moveButton.addEventListener('mouseover', () => {
      const maxX = window.innerWidth - moveButton.offsetWidth;
      const maxY = window.innerHeight - moveButton.offsetHeight;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      moveButton.style.position = 'absolute';
      moveButton.style.left = randomX + 'px';
      moveButton.style.top = randomY + 'px';
    });

    const dy = document.getElementById('dy');
    dy.onclick = function(){
      window.location.href = 'trangdich.html';
    }