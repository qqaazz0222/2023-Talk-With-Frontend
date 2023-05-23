import * as React from "react";
import Container from "@mui/material/Container";
import Carousel from "react-material-ui-carousel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import posts from "../data/rPost.json";

function RankList(props) {
    return (
        <React.Fragment>
            <Container>
                <Typography mt={4}>오늘의 인기글</Typography>
                <Carousel
                    animation={"slide"}
                    duration={1000}
                    height={"200px"}
                    indicators={false}
                    md={4}
                >
                    {posts.map((post) => (
                        <Card sx={{ margin: 2 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {post.name}
                                </Typography>
                                <Typography
                                    sx={{ mb: 1.5 }}
                                    color="text.secondary"
                                >
                                    {post.description}
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    {post.tags.map((tag) => (
                                        <Chip
                                            label={tag}
                                            variant="outlined"
                                            size="small"
                                        />
                                    ))}
                                </Stack>
                            </CardContent>
                        </Card>
                    ))}
                </Carousel>
            </Container>
        </React.Fragment>
    );
}

export default RankList;
