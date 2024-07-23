import React from "react";
import { BlogDataWrapper, BlogItem, Container, Content } from "./style";
import blogItemData from "../../utils/blog";

const Blog = () => {
  return (
    <Container>
      <Container.Title>Blog</Container.Title>
      <Content>
        <BlogDataWrapper>
          {blogItemData.map(({ id, title, text }) => {
            return (
              <BlogItem key={id}>
                <BlogItem.Title>
                  {title}
                  <BlogItem.Text>{text}</BlogItem.Text>
                </BlogItem.Title>
              </BlogItem>
            );
          })}
        </BlogDataWrapper>
      </Content>
    </Container>
  );
};

export default Blog;
