import React, { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import qPosts from "../data/qPost.json";
import dPosts from "../data/dPost.json";

function PostList(props) {
    const [posts, setPosts] = useState(qPosts);
    return (
        <React.Fragment>
            <Container>
                {posts === qPosts && (
                    <div>
                        <Button variant="text">Text</Button>
                        <Button variant="outlined">Outlined</Button>
                    </div>
                )}

                <Typography>질문</Typography>
                <Grid container spacing={1}>
                    {posts.map((post) => (
                        <Grid item xs={4}>
                            <Card xs={4}>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            sx={{ bgcolor: "#000" }}
                                            aria-label="recipe"
                                        >
                                            {post.user[0]}
                                        </Avatar>
                                    }
                                    title={post.title}
                                    subheader={post.date}
                                />
                                <CardContent>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {post.description}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default PostList;
