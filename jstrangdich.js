const numSparkles = 30;
for(let i=0; i<numSparkles; i++){
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.top = Math.random() * 100 + 'vh';
  sparkle.style.animationDelay = (Math.random()*2) + 's';
  document.body.appendChild(sparkle);
}