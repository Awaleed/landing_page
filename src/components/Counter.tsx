"use client";

import { decrement, increment } from "@/redux/slices/counter";

import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { RootState } from "@/redux/store";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </>
  );
}