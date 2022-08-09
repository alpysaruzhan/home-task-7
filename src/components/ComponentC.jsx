import { useContext, useEffect } from "react";
import { testContext } from "../contexts/colorContext";

export default function ComponentC(props) {
  const context = useContext(testContext);
  const styles = { color: context.color };

  useEffect(() => {
    setTimeout(() => context.changeColor(), 1000);
  });

  return <h2 style={styles}>Component C</h2>;
}
