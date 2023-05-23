import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Header(props) {
    const { sections, title } = props;
    return (
        <React.Fragment>
            <Toolbar>
                <Typography
                    component="h1"
                    variant="h5"
                    color="inherit"
                    align="left"
                    fontWeight={"bold"}
                    noWrap
                    sx={{ flex: 1 }}
                >
                    {title}
                </Typography>
                <Paper
                    component="form"
                    sx={{
                        flex: 2,
                        p: "2px 4px 2px 8px",
                        display: "flex",
                        alignItems: "center",
                        maxWidth: 400,
                        boxShadow: "none",
                        border: "1px solid #ccc",
                        borderRadius: "40px",
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ "aria-label": "search" }}
                    />
                    <IconButton
                        type="button"
                        sx={{ p: "4px" }}
                        aria-label="search"
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{
                    justifyContent: "space-around",
                    overflowX: "auto",
                    borderBottom: 1,
                    borderColor: "divider",
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        justifyContent: "space-between",
                    }}
                >
                    <Grid item fullWidth align="start">
                        {sections.map((section) => (
                            <Link
                                color="inherit"
                                noWrap
                                key={section.title}
                                variant="body2"
                                href={section.url}
                                sx={{ p: 1, flexShrink: 0 }}
                                underline="hover"
                            >
                                {section.title}
                            </Link>
                        ))}
                    </Grid>
                    <Grid item>
                        <Link
                            color="inherit"
                            noWrap
                            key="Sign In"
                            variant="body2"
                            href="#"
                            sx={{ p: 1, flexShrink: 0 }}
                            underline="hover"
                        >
                            로그인
                        </Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default Header;
