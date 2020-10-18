import React from "react";
import { shallow } from "enzyme/build";
import { ProductActionButton } from "../components/products/ProductActionButton";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { incrementStockAction } from "../redux/actions/products/stockActions";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("ProductActionButton component", () => {
  describe("when provider mode is on ", () => {
    it("should render 2 buttons", () => {
      const wrapper = shallow(
        <ProductActionButton
          isProvider={true}
          productId={"prod1"}
          price={200}
          stock={300}
        />
      );
      expect(wrapper.find(Button)).toHaveLength(2);
    });
    it("should call dispatch method with correct argument when increment button is clicked", () => {
      const mockDispatch = jest.fn();
      useDispatch.mockImplementation(() => mockDispatch);
      const wrapper = shallow(
        <ProductActionButton
          isProvider={true}
          productId={"prod12"}
          price={200}
          stock={300}
        />
      );
      wrapper.find("#incrementButton").simulate("click");
      expect(mockDispatch).toBeCalledWith(incrementStockAction("prod12"));
    });
  });
});