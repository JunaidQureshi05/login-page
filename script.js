const labels = document.querySelectorAll('.form-control label');
const form = document.querySelector('form');
const input1 = document.querySelector('#username');
const input2 = document.querySelector('#password');
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input1.value !== '' && input2.value !== '') {
    console.log('clicked');
    document.getElementById('overlay').style.cssText =
      ' height: 100%;width: 100%;background: purple;z-index: 5;border-bottom-right-radius: 0%;';
  }
});
