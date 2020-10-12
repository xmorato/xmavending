import { useSelector } from 'react-redux'
import { Box } from "@material-ui/core"
import React from 'react';
import { ProductRow } from './ProductRow'
import { ProductHeader } from './ProductHeader'

const ProductList = () => {

    const products = useSelector(state => state.products)

    return (
        <>
            <ProductHeader />
            <Box display="flex" flexDirection="column" justifyContent="center">
                {Object.entries(products).map((product) =>
                    <ProductRow product={product[1]} productId={product[0]} key={product[0]} />)
                }
            </Box>

        </>
    )
}

export default ProductList;