import idGenerator from "./Id";
import { useState } from "react";
import Button from "../Button/Button";
import { InputAdornment, TextField } from "@mui/material";
import { BackToLink, Container, FormWrapper, InputWrapper } from "./style";
import { NavLink } from "react-router-dom";

const Form = () => {
  const [disable, setDisable] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    phoneNumber: "",
  });

  const idGen = idGenerator();

  const makeDisabled = () => {
    if (inputValues.name.length > 0 && inputValues.phoneNumber.length > 0) {
      setDisable(true);
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
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
            name: inputValues.name,
            phoneNumber: inputValues.phoneNumber,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data) {
        makeDisabled();
      }

      setInputValues({
        name: "",
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
            autoComplete="off"
            placeholder="Ismingizni kiriting"
            value={inputValues.name}
            onChange={handleChange}
          />

          <TextField
            label="Telefon raqamingiz"
            placeholder="99 999 99 99"
            autoComplete="off"
            name="phoneNumber"
            value={inputValues.phoneNumber}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+998</InputAdornment>
              ),
            }}
          />
        </InputWrapper>
        <Button
          onClick={handleSubmit}
          disable={disable}
          h="60px"
          type="secondary"
          size="medium"
        >
          Yuborish
        </Button>
        <BackToLink to="/">Asosiy sahifaga qaytish</BackToLink>
      </FormWrapper>
    </Container>
  );
};

export default Form;
