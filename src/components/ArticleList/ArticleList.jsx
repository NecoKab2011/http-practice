import { Box, List, Item, Link } from "./ArticleList.js";

export const ArticleList = ({ articles }) => (
  <Box>
    <List>
      {articles.map(({ objectID, url, title, points, author }) => (
        <Item key={objectID}>
          <Link href={url} target="_blank" rel="noreferrer noopener">
            {title}
          </Link>
          <p>points: {points}</p>
          <p>author: {author}</p>
        </Item>
      ))}
    </List>
  </Box>
);
