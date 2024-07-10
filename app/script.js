const btnRef = document.querySelector('.push');
btnRef.addEventListener('click', show);

function show() {
  const textEl = document.querySelector('.text-input');
  const passEl = document.querySelector('.pass-input');
  const rangeEl = document.querySelector('.range-input');
  const dateEl = document.querySelector('.date-input');
  const colorEl = document.querySelector('.color-input');
  const checkEl = document.querySelector('#check-input');

  const radioEl = document.querySelector('.radio[checked="checked"]');
  console.log(textEl.value);
  console.log(passEl.value);
  console.log(rangeEl.value);
  console.log(dateEl.value);
  console.log(colorEl.value);
  console.log(checkEl.checked);
  if (checkEl.checked) {
    console.log('Yes');
  } else {
    console.log('No');
  }

  console.log(radioEl.value);

  console.log('uprove');
}
