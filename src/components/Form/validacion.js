export function validate(userData) {
  const errors = {};

  // Validación del email
  if (!userData.email) {
    errors.email = "El email es requerido";
  } else if (userData.email.length > 35) {
    errors.email = "El email no puede tener más de 35 caracteres";
  } else if (!validateEmail(userData.email)) {
    errors.email = "Ingresa un email válido";
  }

  // Validación de la contraseña
  if (!userData.password) {
    errors.password = "La contraseña es requerida";
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  } else if (!/\d/.test(userData.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  }

  return errors;
}
function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}