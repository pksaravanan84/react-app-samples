import React from "react";
import { useState, useRef } from "react";

export default function RefSample() {
  const [state, setState] = React.useState();
  const ref = React.useRef(null);
  //   const nameRef = useRef("saravanan");
  //   //   const emailRef = useRef("dtm6fhn@ups.com");
  //   useEffect(() => {
  //     console.log(nameRef.current);
  //     // console.log(emailRef.current);
  //   });
  //   return (
  //     <>
  //       <div>This is RefSample</div>
  //       <input ref={nameRef} value=""></input>
  //       {/* <input ref={emailRef} value=""></input> */}
  //     </>
  //   );

  if (state < 1) {
    /**
     * We know this alter the state, so a re-render will happen
     */
    setState("foo");
  }

  useEffect(() => {
    /**
     * We don't know exactly when is `ref.current` going to
     * point to a DOM element. But we're interested in logging
     * when it happens.
     */
    if (ref.current) {
      console.log(ref.current);

      /**
       * Try commenting and uncommenting the next line, and see
       * the amount of renderings
       */
      setState("bar");
    }
  }, [ref]);

  renderCounter = renderCounter + 1;
  console.log(renderCounter);

  return <div ref={el}>simple</div>;
}
