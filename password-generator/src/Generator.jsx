const generator = (limit) => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}|:<>?";

  let characters = "";

  if (document.getElementById("lowercaseCheck").checked) {
    characters += lowercase;
  }
  if (document.getElementById("uppercaseCheck").checked) {
    characters += uppercase;
  }
  if (document.getElementById("numbersCheck").checked) {
    characters += numbers;
  }
  if (document.getElementById("symbolsCheck").checked) {
    characters += symbols;
  }

  if (characters === "") {
    alert("Please select at least one character type");
    return;
  }

  let password = [];

  for (let i = 0; i < limit; i++) {
    password.push(
      characters.charAt(Math.floor(Math.random() * characters.length))
    );
  }

  return password.join("");
};

export default generator;
