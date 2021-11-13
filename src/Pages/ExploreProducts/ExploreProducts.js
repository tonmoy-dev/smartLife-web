import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navigation from "../Shared/Navigation/Navigation";
import Product from "../Shared/Product/Product";

const ExploreProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://intense-chamber-05246.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, []);

    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ my: 4, textAlign: 'center' }} variant="h4" component="div">
                        OUR ALL PRODUCTS
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            products.map(product =>
                                <Product
                                    key={product.name}
                                    product={product}
                                ></Product>
                            )}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default ExploreProducts ;