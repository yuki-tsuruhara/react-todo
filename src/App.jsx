import React, { useState } from "react";
import "./styles.css";
import { InputArea } from "./Components/input";
import { IncompleteArea } from "./Components/incomplete";
import { CompleteArea } from "./Components/complete";
export const App = () => {
  // todoテキストの検知
  const [todoText, setTodoText] = useState("");
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onclickAdd = () => {
    if (todoText === "") return;
    const newAdd = [...incompleteTodo, todoText];
    setIncompleteTodo(newAdd);
    setTodoText("");
  };
  const onclickDelete = (index) => {
    const inconpleteContent = [...incompleteTodo];
    inconpleteContent.splice(index, 1);
    setIncompleteTodo(inconpleteContent);
  };

  const onclickReach = (index) => {
    const newInconpleteContent = [...incompleteTodo];
    newInconpleteContent.splice(index, 1);

    // 完了のTODOから値を取得して、未完了のTODOで完了したTODOを追加
    const completeContent = [...completeTodo, incompleteTodo[index]];
    setCompleteTodo(completeContent);
    setIncompleteTodo(newInconpleteContent);
  };

  const onclickBack = (index) => {
    // 完了のTODOから削除　➡　未完了のTODOに戻す
    // 完了のTODOから配列を取得する
    const newcompleteContent = [...completeTodo];
    newcompleteContent.splice(index, 1);

    const newIncompleteContent = [...incompleteTodo, completeTodo[index]];
    setCompleteTodo(newcompleteContent);
    setIncompleteTodo(newIncompleteContent);
  };
  return (
    <>
      <InputArea
        todoText={todoText}
        onchange={onChangeTodoText}
        onAdd={onclickAdd}
        disabled={incompleteTodo.length >= 5}
      />
      {incompleteTodo.length >= 5 &&
        alert("これ以上登録できません！TODOを消化しましょう！")}
      <IncompleteArea
        todos={incompleteTodo}
        onreach={onclickReach}
        ondelete={onclickDelete}
      />
      <CompleteArea todos={completeTodo} onback={onclickBack} />
    </>
  );
};

// 5個以上追加したら、警告文がでて、それ以上追加できなくなる。

// １．incompletentの数を監視する
// ２．１が５以上になったら警告文を出す
// ３．１が５以上になったらinput部分を使えなくする
