import Checkbox from "./Checkbox";

const Checkboxes = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center max-w-lg gap-x-16">
      <Checkbox name="Add lowercase letters" id="lowercaseCheck" />
      <Checkbox name="Add uppercase letters" id="uppercaseCheck" />
      <Checkbox name="Add numbers" id="numbersCheck" />
      <Checkbox name="Add symbols" id="symbolsCheck" />
    </div>
  );
};

export default Checkboxes;
