import BaseUrl from "./Url";
import { useState, useEffect } from "react";
import { Button, InputAdornment, TextField } from "@mui/material";
import { BackToLink, Container, FormWrapper, InputWrapper } from "./style";
import getNextId from "./Id";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phoneNumber: "",
  });
  const [disable, setDisable] = useState(false);
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    const fetchNextId = async () => {
      const id = await getNextId();
      setNextId(id);
    };

    fetchNextId();
  }, []);

  const checkValue = ({ target }) => {
    const { name, value } = target.value;
    if (name == "name") {
      if (
        value === "" ||
        (/^\d{0,12}$/.test(value) && value.length >= 0 && value.length <= 12)
      ) {
        setValue(value);
      }
    }
    // -----
    if (name === "phoneNumber") {
      // Matn faqat harflardan iborat bo'lishi kerak va uzunligi 3 dan 40 gacha bo'lishi kerak
      if (/^[a-zA-Z\s]*$/.test() && value.length <= 40) {
        setValue(value);
      }
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputs((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    checkValue(target);
    setDisable(!inputs.name || !inputs.phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDisable(true);

    try {
      const response = await fetch(BaseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: nextId,
          name: inputs.name,
          phoneNumber: inputs.phoneNumber,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data) {
        setDisable(false);
      }

      setInputs({
        name: "",
        phoneNumber: "",
      });
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
            inputProps={{
              minLength: 3,
              maxLength: 40,
            }}
            required
            helperText="Please enter text between 3 and 40 characters"
          />

          <TextField
            label="Telefon raqamingiz"
            placeholder="99 999-99-99"
            autoComplete="off"
            name="phoneNumber"
            value={inputs.phoneNumber}
            onChange={handleChange}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              maxLength: 12,
              minLength: 7,
            }}
            required
            helperText="Please enter a number between 7 and 12 digits"
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
