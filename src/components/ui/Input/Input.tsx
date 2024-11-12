// const inputs = [
//   { label: 'First Name', type: 'text', name: 'firstName' },
//   { label: 'Last Name', type: 'text', name: 'lastName' },
//   { label: 'Email', type: 'email', name: 'email' }
// ];

import style from "./Input.module.css";

interface IInput {
  name: string;
  type: "text" | "email" | "tel";
  label: string;
  // value: string; // Temporary not put the value first
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  message?: string;
}

// !this way is kinda limited, how should i able to display the respective error message
// !for example, if the user didn't actually fill the required form, I should render a required message ("This field is required")

// I literally use the interface of the HTMLInputElement...
function Input({
  name,
  type = "text",
  label = "place your label here",
  placeholder,
  required = false,
  minLength,
  maxLength,
  pattern,
  message = "Error message",
}: IInput) {
  return (
    <div className={style.formControl}>
      <div className={style.heading}>
        <label htmlFor={name}>{label}</label>
        {/* error message */}
        <span className={style.message}>{message}</span>
      </div>
      <input
        id={name}
        className={style.inputBox}
        name={name}
        type={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        required={required}
      />
    </div>
  );
}

export { Input };

/*
<Input
  name="name"
  type="text"
  label="Name"
  value=""
  placeholder="e.g. Stephen King"
  required={true}
  minLength={4}
/>

<Input
  name="email"
  type="email"
  label="Email Address"
  value=""
  placeholder="e.g. stephenking@lorem.com"
  required={true}
  pattern="^[\w-\.]+@([\w-]+\.)+[a-zA-Z]{2,}$"
  message="The email is invalid"
/>

<Input
  name="phone"
  type="tel"
  label="Phone Number"
  value=""
  placeholder="e.g. +1 234 567 890"
  required={true}
/>

*/
