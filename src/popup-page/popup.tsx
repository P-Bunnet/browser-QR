import React, { FC, useEffect, useState } from "react";
import { render } from "react-dom";

interface IProps {}

export const Popup: FC<IProps> = () => {
  return <div>Hello World</div>;
};

render(<Popup />, document.getElementById("popup"));
