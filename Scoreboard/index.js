
function homeScore(value) {
    const score = document.getElementById('home-points');
    score.innerHTML = parseInt(score.innerHTML) + value; 
}

function guestScore(value) {
    const score = document.getElementById('guest-points');
    score.innerHTML = parseInt(score.innerHTML) + value;
}

function resetScore() {
    const scoreh = document.getElementById('home-points');
    const scoreg = document.getElementById('guest-points');
    scoreh.innerHTML = 0;
    scoreg.innerHTML = 0;
  }
