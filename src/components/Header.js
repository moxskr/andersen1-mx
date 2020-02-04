import React from "react";
import SearchInput from "./SearchInput";
import {Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles(theme => ({
    header : {
        backgroundColor : '#333',
        padding : theme.spacing(2)
    },
    headerLogo : {
        color : 'white',
        textDecoration : 'none',
        '&:hover' : {
            opacity : '0.8',
            transitionDuration : '0.3s',

        }
    },
    btn : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        paddingLeft : '10px',
        paddingRight : '10px'
    }
}));

const Header = () => {
    const styles = useStyle();
    return <AppBar className="header" className={styles.header} position="static">
        <Container maxWidth="lg">
            <Grid container>
                <Grid item lg={6}>
                    <Link to="/" className={styles.headerLogo}>
                        <Typography variant="h4">Logo</Typography>
                    </Link>
                </Grid>
                <Grid item lg={4}>
                    <SearchInput/>
                </Grid>
                <Grid item lg={2} className={styles.btn}>
                    <Link to="/favourite">
                        <Button variant="outlined" color="primary">
                            Favourite
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    </AppBar>;
}

export default Header;
