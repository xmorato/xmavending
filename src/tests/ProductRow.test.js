import React from 'react';
import { useSelector } from 'react-redux'
import { shallow } from 'enzyme/build'
import { ProductRow } from '../components/products/ProductRow'
import { ProductActionButton } from '../components/products/ProductActionButton'

jest.mock("react-redux", () => ({
    useSelector: jest.fn()
}))

describe("ProductRow component", () => {
    const prod = { name: "potato", price: 0.80, stock: 10 }

    it("should render ProductActionButton component with correct props when is Provider mode on", () => {
        useSelector.mockImplementation(() => (true))
        const wrapper = shallow(<ProductRow product={prod} productId="potatoId" />)

        expect(wrapper.find(ProductActionButton)).toHaveLength(1)
        expect(wrapper.find(ProductActionButton).props().isProvider).toBe(true)
    })

    it("should render ProductActionButton component with correct props when is not Provider Mode on", () => {
        useSelector.mockImplementation(() => (false))
        const wrapper = shallow(<ProductRow product={prod} productId="potatoId" />)

        expect(wrapper.find(ProductActionButton)).toHaveLength(1)
        expect(wrapper.find(ProductActionButton).props().isProvider).toBe(false)
    })

})


