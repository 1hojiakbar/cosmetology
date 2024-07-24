import { useState } from "react";
import Button from "../Button/Button";
import { TextField } from "@mui/material";
import { Container, FormWrapper, InputWrapper } from "./style";

const Form = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    phoneNumber: "",
  });

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
    e.preventDefault();

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
    <Container>
      <FormWrapper>
        <FormWrapper.Title>JOYINGIZNI BAND QILISH UCHUN</FormWrapper.Title>
        <FormWrapper.SubTitle>
          Ma'lumotlaringizni qoldiring
        </FormWrapper.SubTitle>
        <InputWrapper>
          <TextField
            label="Ismingiz"
            name="name"
            placeholder="Ismingizni kiriting"
            value={inputValues.fullName}
            onChange={handleChange}
          />

          <TextField
            label="Telefon raqamingiz"
            placeholder="Telefon raqamingizni kiriting"
            name="phoneNumber"
            value={inputValues.fullName}
            onChange={handleChange}
          />
        </InputWrapper>
        <Button onClick={handleSubmit} h="60px" type="secondary" size="medium">
          Yuborish
        </Button>
      </FormWrapper>
    </Container>
  );
};

export default Form;
