import React, { useState } from "react";

export const validate = input => {
  const errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (
    !/^[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
      input.username
    )
  ) {
    errors.username = "Username is invalid";
  }

  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
};

export default function Form() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;

    setError(validate({ ...input, [name]: value }));

    setInput({
      ...input,
      [name]: value,
    });
  };

  console.log(input);
  console.log(error);
  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={input.username}
          className={error?.username && "danger"}
          onChange={handleChange}
        />
        {error?.username && <p className="danger">{error.username}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={input.password}
          className={error?.password && "danger"}
          onChange={handleChange}
        />
        {error?.password && <p className="danger">{error.password}</p>}
      </div>

      <button type="submit">Sumbit</button>
    </form>
  );
}
