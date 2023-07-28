import { render } from "@testing-library/react";
import { Router } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

const Harness =
  ({ cartContext }) =>
  ({ children }) => {
    return (
        <CartContext.Provider
          value={{ cart: cartContext }}
        >
            <Router location={"/"}>{children}</Router>
        </CartContext.Provider>
    );
  };

const customRender = (
  ui,
  { cartContext } = {},
  options
) => {
  const Wrapper = Harness({ cartContext });
  return {
    ...render(ui, { wrapper: Wrapper, ...options }),
  };
};

export * from "@testing-library/react";

export { customRender as render };
