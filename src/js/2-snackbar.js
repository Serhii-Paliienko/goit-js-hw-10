const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', e => {
  const eventName = e.target.name;
  const eventValue = e.target.value.trim();
  formData[eventName] = eventValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFormData) {
  form.elements.email.value = savedFormData.email || '';
  form.elements.message.value = savedFormData.message || '';

  formData.email = savedFormData.email || '';
  formData.message = savedFormData.message || '';
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = formData.email.trim();
  const message = formData.message.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  formData.email = '';
  formData.message = '';
  form.reset();
});
