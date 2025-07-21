function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function iconClicked(label) {
  alert(`You clicked on "${label}" icon.`);
}

document.getElementById('searchInput').addEventListener('input', function () {
  const filter = this.value.toLowerCase();
  const cards = document.querySelectorAll('.icon-card');
  
  cards.forEach(card => {
    const label = card.getAttribute('data-label').toLowerCase();
    card.style.display = label.includes(filter) ? 'block' : 'none';
  });
});
