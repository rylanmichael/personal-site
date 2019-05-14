import React, { createRef } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Placeholder,
  // Icon,
  Image,
  Input,
  Label,
  Menu,
  Ref,
  Segment,
  Sticky
} from "semantic-ui-react";
import { Link } from "gatsby";
import Layout from "../layout/index";

const NotesPage = props => {
  const {
    location: { pathname }
  } = props; // Nested destructuring.
  const contextRef = createRef();

  return (
    <Layout pathname={pathname}>
      <Ref innerRef={contextRef}>
        <Grid.Column width={5} style={{ overflowY: "scroll" }}>
          <Sticky context={contextRef} offset={30} pushing>
            <Menu vertical style={{ width: "100%" }}>
              <Menu.Item>
                <Input icon="search" placeholder="Search notes..." />
              </Menu.Item>
              <Menu.Item>
                <Menu.Header>Design</Menu.Header>
                <Menu.Menu>
                  <Menu.Item as={Link}>UI / UX</Menu.Item>
                  <Menu.Item name="Brand Identity" as={Link} />
                </Menu.Menu>
              </Menu.Item>
              <Menu.Item>
                <Menu.Header>Web</Menu.Header>
                <Menu.Menu>
                  <Menu.Item name="Web Assembly" as={Link} />
                  <Menu.Item name="Gatsby" as={Link} />
                  <Menu.Item name="Elixir" as={Link} />
                  <Menu.Item name="Technology" as={Link} />
                  <Menu.Item name="Scalabality" as={Link} />
                </Menu.Menu>
              </Menu.Item>
              <Menu.Item>
                <Menu.Header>Desktop</Menu.Header>
                <Menu.Menu>
                  <Menu.Item name="Rust" as={Link} />
                  <Menu.Item name="Language Theory" as={Link} />
                  <Menu.Item name="Software Patterns" as={Link} />
                  <Menu.Item name="Systems Programming" as={Link} />
                </Menu.Menu>
              </Menu.Item>
              <Menu.Item>
                <Menu.Header>Graphics</Menu.Header>
                <Menu.Menu>
                  <Menu.Item name="Foundations" as={Link} />
                  <Menu.Item name="Rust" as={Link} />
                  <Menu.Item name="Godot" as={Link} />
                  <Menu.Item name="Vulkan API" as={Link} />
                </Menu.Menu>
              </Menu.Item>
              <Menu.Item>
                <Button.Group attached="bottom">
                  <Button compact as={Link} to="/">Home</Button>
                  <Button compact as={Link} to="/about">About</Button>
                </Button.Group>
              </Menu.Item>
            </Menu>
          </Sticky>
        </Grid.Column>
      </Ref>
      <Grid.Column width={11} style={{ overflowY: "scroll" }}>
        <Container>
          <Header as="h2">
            <span role="img" aria-label="book">📘</span>
            Notes Collection
          </Header>
          <p>
            This is my personal collection of notes on concepts that I find
            interesting. I personally refer back to this collection constantly.
          </p>
        </Container>
        <Divider hidden />
        <Grid container columns={2} stackable>
          <Grid.Column>
            <Segment>
              <Label as="a" color="blue" ribbon>
                New
              </Label>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Label as="a" color="red" ribbon>
                Popular
              </Label>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
              </Placeholder>
            </Segment>
          </Grid.Column>
        </Grid>
        <div style={{ height: 50 }} />
        <Divider horizontal>
          <Header as="h4">Recommended Reading</Header>
        </Divider>
        <Image.Group size="small">
          <Image
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            rounded
          />
          <Image
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            rounded
          />
          <Image
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            rounded
          />
        </Image.Group>
        <div style={{ height: 10 }} />
        <Divider horizontal>
          <Header as="h4">Recent Notes</Header>
        </Divider>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </Grid.Column>
    </Layout>
  );
};

export default NotesPage;
