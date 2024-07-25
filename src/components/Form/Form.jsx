import BaseUrl from "./Url";
import idGenerator from "./Id";
import { useState } from "react";
import { Button, InputAdornment, TextField } from "@mui/material";
import { BackToLink, Container, FormWrapper, InputWrapper } from "./style";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [disable, setDisable] = useState(false);

  const idGen = idGenerator();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputs((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);

    // Posting data to the google.sheets
    try {
      const response = await fetch(BaseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: idGen.next().value,
          name: inputs.name,
          phoneNumber: inputs.phoneNumber,
        }),
      });

      // If the resonse isn't ok that's "new Error" gone to "catch" section
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data) {
        setDisable(false);
      }

      // clear input values
      setInputs({
        name: "",
        phoneNumber: "",
      });

      // show error in console
    } catch (error) {
      console.error("There was an error sending data:", error);
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
            value={inputs.name}
            onChange={handleChange}
            error={errors.name}
            helperText={errors.name}
          />

          <TextField
            label="Telefon raqamingiz"
            placeholder="99 999-99-99"
            autoComplete="off"
            name="phoneNumber"
            value={inputs.phoneNumber}
            onChange={handleChange}
            helperText={errors.phoneNumber}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+998</InputAdornment>
              ),
            }}
          />
        </InputWrapper>
        <Button
          variant="contained"
          disabled={disable}
          onClick={handleSubmit}
          size="medium"
          sx={{ bgcolor: "#0c00ff", height: "60px" }}
        >
          Yuborish
        </Button>
        <BackToLink to="/">Asosiy sahifaga qaytish</BackToLink>
      </FormWrapper>
    </Container>
  );
};

export default Form;
