export default function TaskInput({
  input,
  onChangeInput,
  handlePressKey,
  inputValid,
  onClickBtn,
}) {
  return (
    <div className="tasks-items-wrapper">
      <input
        type="text"
        className="int"
        value={input}
        onChange={(e) => onChangeInput(e)}
        onKeyDown={handlePressKey}
        placeholder="Добавить новую задачу"
        style={{ border: inputValid ? "1px solid red" : "" }}
      />
      <button className="btn" onClick={onClickBtn}>
        Добавить
      </button>
    </div>
  );
}
