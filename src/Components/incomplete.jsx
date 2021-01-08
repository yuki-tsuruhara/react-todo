import React from "react";

export const IncompleteArea = (props) => {
  const { todos, onreach, ondelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list">
              <li>{todo}</li>
              <button
                onClick={() => {
                  onreach(index);
                }}
              >
                完了
              </button>
              <button
                onClick={() => {
                  ondelete(index);
                }}
              >
                削除
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
