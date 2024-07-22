import React, { useState } from "react";

const Form = () => {
  const [inputValues, setInputValues] = useState({
    fullName: "",
    phoneNumber: "",
  });

  // Unikal ID generator funksiyasi
  function* idGenerator() {
    let id = 1;
    while (true) {
      yield id++;
    }
  }
  const idGen = idGenerator();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Formani standart yuborish harakatini to'xtatish

    try {
      const response = await fetch(
        "https://sheet.best/api/sheets/e499384a-e045-4e80-b780-1abf0a4763d6/tabs/Data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: idGen.next().value,
            userName: inputValues.fullName,
            phoneNumber: inputValues.phoneNumber,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Serverdan qaytgan ma'lumot:", data);

      setInputValues({
        fullName: "",
        phoneNumber: "",
      });
    } catch (error) {
      console.error("Ma'lumotni yuborishda xato yuz berdi:", error);
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="full-name"
          name="fullName"
          value={inputValues.fullName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phone-number"
          name="phoneNumber"
          value={inputValues.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
