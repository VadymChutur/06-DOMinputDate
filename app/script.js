const btnRef = document.querySelector('.push');
btnRef.addEventListener('click', show);

function show() {
  const textEl = document.querySelector('.text-input');
  const passEl = document.querySelector('.pass-input');
  const rangeEl = document.querySelector('.range-input');
  const dateEl = document.querySelector('.date-input');
  const colorEl = document.querySelector('.color-input');
  const checkEl = document.querySelector('.check-input');
  console.log(textEl.value);
  console.log(passEl.value);
  console.log(rangeEl.value);
  console.log(dateEl.value);
  console.log(colorEl.value);
  console.log(checkEl.value);
  console.log('uprove');
}
