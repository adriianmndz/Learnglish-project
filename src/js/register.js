const grupos = ['fname', 'sname', 'email', 'password', 'repeatpassword'];
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
