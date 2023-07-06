export function validate(datos) {
    const regex = new RegExp(/\S+@\S+\.\S+/);

    let incorrect = {};
    if (datos.email.length <= 4) {
      incorrect.email = "Username must be 5 characters long at least";
    } else if (!datos.email.includes("2")) {
      incorrect.email = "Must includes a 2";
    } else if (!regex.test(datos.email)) {
      incorrect.email = "You must enter a valid email";
    }

    return incorrect;
  }