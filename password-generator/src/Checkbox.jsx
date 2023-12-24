const Checkbox = ({ name, id }) => {
  return (
    <div class="form-control w-56">
      <label class="cursor-pointer label gap-4 justify-between">
        <span class="label-text font-medium">{name}</span>
        <input
          type="checkbox"
          class="checkbox checkbox-error"
          defaultChecked
          id={id}
        />
      </label>
    </div>
  );
};

export default Checkbox;
