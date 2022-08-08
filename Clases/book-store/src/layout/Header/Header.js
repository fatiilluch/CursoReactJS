import React from "react";
import {Link, NavLink} from "react-router-dom";
import {Container, Grid} from "@mui/material";
import styles from './header.module.css';

const inlineStyles = {
    wrapper: {
        height: '50px'
    }
}

export const Header = () => {
    return(
        <div style={inlineStyles.wrapper}>
            <div className={styles.header}>
                <Container maxWidth="lg">
                    <Grid container spacing={0} className={styles['header-wrapper']} alignItems="center">
                        <Grid item xs={2}>
                            <Link to="/"> Home via Link </Link>
                            <NavLink to="/add" > Add via NavLink </NavLink>
                        </Grid>
                        <Grid item xs={2}>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}