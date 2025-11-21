function positionmenumapnav(){
  const menu = document.getElementById("menumapnav");
  const menu2 = menu.value;
  if (menu2){
    window.location.href = menu2;
  }
}

const grupos = ['confirmationcode'];
grupos.forEach((tipo) => {
  document.querySelectorAll(`.input-group.${tipo} input`).forEach((input) => {
  const group = input.closest(`.input-group.${tipo}`);
  if (!group) return;

  const updateFilled = () => {
    if (input.value && input.value.trim() !== '') {
      group.classList.add('filled');
    } else {
      group.classList.remove('filled');
    }
  };

  input.addEventListener('input', updateFilled);
  input.addEventListener('change', updateFilled);
  updateFilled();
});
});