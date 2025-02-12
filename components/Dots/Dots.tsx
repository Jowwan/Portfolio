"use client";
import { useRef } from "react";
import {
  drawLines,
  getMouseLeaveHandler,
  getMouseMoveHandler,
} from "./Dots.helpers";
import React from "react";
import styles from "./Dots.module.css";

const Dots: React.FC<React.PropsWithChildren> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boundingRect = useRef<HTMLDivElement>(null);
  const [canvasWidth, setCanvasWidth] = React.useState(0);
  const [canvasHeight, setCanvasHeight] = React.useState(0);

  React.useEffect(() => {
    if (!canvasRef.current) return;

    const props = drawLines(canvasRef, boundingRect);
    if (!props) return;

    const handleMouseMove = getMouseMoveHandler(props);

    const handleMouseLeave = getMouseLeaveHandler(props);

    props.canvas.addEventListener("mousemove", handleMouseMove);
    props.canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      props.canvas.removeEventListener("mousemove", handleMouseMove);
      props.canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [boundingRect, canvasRef]);

  React.useEffect(() => {
    const currentRect = boundingRect.current;
    const canvasHeight = currentRect ? currentRect.clientHeight - 25 : 0;
    const canvasWidth = currentRect ? currentRect.clientWidth : 0;
    setCanvasHeight(canvasHeight);
    setCanvasWidth(canvasWidth);
  }, [canvasRef]);

  return (
    <div className={styles.wrapper} ref={boundingRect}>
      <canvas
        className={styles.canvas}
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
      />
      {children}
    </div>
  );
};

export default React.memo(Dots);
