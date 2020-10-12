import React from 'react';
import { shallow } from 'enzyme/build'
import { ProductHeader } from '../components/products/ProductHeader'
import { ProductRow } from '../components/products/ProductRow'
import ProductList from '../components/products/ProductList'

jest.mock("react-redux", () => ({
  useSelector: () => ({
    "p1": { name: "blabla1", price: 0.80, stock: 10 },
    "p2": { name: "blabla2", price: 0.75, stock: 16 },
    "p3": { name: "blabla3", price: 0.65, stock: 16 },
  }),
}))

describe("ProductList component", () => {

  const wrapper = shallow(<ProductList />)

  it("should render as ProductRow as products are in store", () => {
    expect(wrapper.find(ProductRow)).toHaveLength(3)
  })
  it("should render ProductHeader component", () => {
    expect(wrapper.find(ProductHeader)).toHaveLength(1)
  })


})


