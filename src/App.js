import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Counter from "./counter";
import "./styles.css";
import MediaPlayer from "./MediaPlayer";
import EcommercePage from "./EcommercePage";
import Todo from "./Todo";
import Calculator from "../Calculator";
import ThemeProvider from "./ContextExample/ThemeProvider";
import ThemeButton from "./ContextExample/ThemeButton";
import MemoExample from "./MemoExample/useMemoExample";
import UseCallbackExample from "./MemoExample/useCallbakcExample";

export default function App() {
  return (
    <>
      {/* <Counter />
      <MediaPlayer />  */}
      {/* <EcommercePage /> */}
      {/* <Todo /> */}
      {/* <Calculator /> */}

      {/* <ThemeProvider>
        <ThemeButton />
      </ThemeProvider> */}

      <MemoExample />

      <UseCallbackExample />
    </>
  );
}
