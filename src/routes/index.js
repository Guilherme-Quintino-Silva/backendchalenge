const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const regexValidatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+])(?!.*(.).*\1).{9,}$/;

//auxiliar Function
const createUserToken = (userValidation) => {
  return jwt.sign({ passwordValidation: userValidation }, "serialize@2024", {
    expiresIn: "1d",
  });
};

router.post("/create", async (req, res) => {
  const { email, password } = req.body;

  //return a boolean when the password is compared with regex.
  const validPasswordBoolean = regexValidatePassword.test(password);

  if (!email || !password)
    return res.status(400).json({ errorMessage: "Dados nao inseridos...", passwordValidation: validPasswordBoolean});

  try {
    //verify if exist email.
    const user = await User.findOne({ email }); 

    if (user) return res.status(401).json({ errorMessage: "Usuario ja criado na base de dados..." });

    //create database when the validPasswordBoolean to be true.
    if (validPasswordBoolean) {
      const userCreate = await User.create(req.body);
      userCreate.password = undefined;
      return res.status(201).json({ messageSucess: 'Usuário criado com sucesso', userCreate, validPasswordBoolean, token: createUserToken(userCreate.id) });
    }
    else {
      return res.status(400).json({ errorMessage: 'Caracteres não permitidos na senha.', errorBoolean: validPasswordBoolean }); 
    }
    
  } catch (err) {
    return res.status(500).json({errorMessage: "Houve algum erro ao criar o usuario", error: err});
  }
});

module.exports = router;
