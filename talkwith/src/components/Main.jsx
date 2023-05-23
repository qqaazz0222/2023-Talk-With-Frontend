import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import RankList from "./RankList";
import PostList from "./PostList";

const sections = [
    { title: "글 작성", url: "#" },
    { title: "질문 게시판", url: "#" },
    { title: "토론 게시판", url: "#" },
    { title: "해시태그", url: "#" },
    { title: "문의하기", url: "#" },
];

const theme = createTheme();

export default function Blog() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <Header title="TalkWith" sections={sections} />
                <RankList />
                <PostList />
            </Container>
        </ThemeProvider>
    );
}
