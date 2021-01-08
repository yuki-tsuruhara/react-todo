import React from "react";

export const InputArea = (props) => {
  const { todoText, onchange, onAdd, disabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="todoを入力"
        type="text"
        value={todoText}
        onChange={onchange}
      />
      <button disabled={disabled} onClick={onAdd}>
        追加
      </button>
    </div>
  );
};
