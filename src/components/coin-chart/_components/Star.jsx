import React from "react";

export default function Star({ isMarked }) {
  return (
    <>
      {isMarked ? (
        <img src="/assets/star_yellow.svg" alt="" />
      ) : (
        <img src="/assets/star_grey.svg" alt="" />
      )}
    </>
  );
}
