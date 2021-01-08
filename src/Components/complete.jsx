import React from "react";

export const CompleteArea = (props) => {
  const { todos, onback } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list">
              <li>{todo}</li>
              <button
                onClick={() => {
                  onback(index);
                }}
              >
                戻す
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
