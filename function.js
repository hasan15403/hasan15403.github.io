// Simple interactive alert for each achievement or project click
document.querySelectorAll('.achievement, .project').forEach(item => {
    item.addEventListener('click', () => {
      alert(`You clicked on: ${item.querySelector('h3').innerText}`);
    });
  });
  