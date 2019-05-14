import React from "react";
import {
  Card,
  Container,
  Header,
  Image,
  Responsive,
  Segment
} from "semantic-ui-react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

const AboutPage = props => {
  const {
    location: { pathname }
  } = props; // Nested destructuring.

  return (
    <Layout pathname={pathname}>
      <Helmet title={`About | ${config.siteTitle}`} />
      <Responsive style={{ minWidth: "100%" }}>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 500 }}
          vertical
        >
          <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
          <Container text>
            <Header as="h1" inverted content="Rylan McCarty" />
          </Container>
        </Segment>
        {/* <Card>
        <Image src="https://avatars0.githubusercontent.com/u/13746934?s=460&v=4" wrapped ui={false} />
        <
      </Card> */}
      </Responsive>
    </Layout>
  );
};

export default AboutPage;
