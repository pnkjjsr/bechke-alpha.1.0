import { isEmpty, isEmail, isMobile } from "@/utils/validations/type";

function validation(field) {
  let errors = {};

  let name = field.name;
  let val = field.value;

  if (isEmpty(val)) {
    errors[name] = `Field shouldn't empty`;
  } else if (name === "otp" && val.length != 6) {
    errors[name] = "Please verify your entered OTP";
  } else if (name === "mobile" && !isMobile(val)) {
    errors[name] = "Please check the entered mobile";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
}

export default validation;
