import { isEmpty, isEmail, isMobile } from "@/utils/validations/type";

function validation(field) {
  let errors = {};

  let name = field.name;
  let val = field.value;

  if (isEmpty(val)) {
    errors[name] = `${name} empty`;
  } else if (name === "mobile" && !isMobile(val)) {
    errors[name] = "incorrect mobile";
  } else if (name === "email" && !isEmail(val)) {
    errors[name] = "incorrect email";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
}

export default validation;
