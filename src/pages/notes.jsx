import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Placeholder,
  // Icon,
  Image,
  Input,
  Menu,
  Segment
} from "semantic-ui-react";
import Layout from "../layout/index";

const NotesPage = props => {
  const {
    location: { pathname }
  } = props; // Nested destructuring.

  return (
    <Layout pathname={pathname}>
      <Grid.Row>
        <Grid.Column width={5} style={{ overflowY: "scroll" }}>
          <Menu vertical style={{ width: "100%" }}>
            <Menu.Item>
              <Input icon="search" placeholder="Search notes..." />
            </Menu.Item>
            <Menu.Item>
              <Menu.Header>Design</Menu.Header>
              <Menu.Menu>
                <Menu.Item name="UI" />
                <Menu.Item name="UX" />
                <Menu.Item name="Responsive Design" />
                <Menu.Item name="Color Theory" />
                <Menu.Item name="Brand Identity" />
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
              <Menu.Header>Web</Menu.Header>
              <Menu.Menu>
                <Menu.Item name="Web Assembly" />
                <Menu.Item name="Gatsby" />
                <Menu.Item name="Elixir" />
                <Menu.Item name="Technology" />
                <Menu.Item name="Scalabality" />
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
              <Menu.Header>Desktop</Menu.Header>
              <Menu.Menu>
                <Menu.Item name="Application Design" />
                <Menu.Item name="Language Theory" />
                <Menu.Item name="Rust" />
                <Menu.Item name="Linux" />
                <Menu.Item name="Windows" />
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
              <Menu.Header>Graphics</Menu.Header>
              <Menu.Menu>
                <Menu.Item name="Basics" />
                <Menu.Item name="OpenGL" />
                <Menu.Item name="Rust" />
                <Menu.Item name="Vulkan API" />
                <Menu.Item name="Godot" />
              </Menu.Menu>
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column width={11} style={{ overflowY: "scroll" }}>
          <Container>
            <Header as="h2">Notes Collection</Header>
            <p>
              This is my personal collection of notes on concepts that I find
              interesting. I personally refer back to this collection
              constantly.
            </p>
          </Container>
          <Divider hidden />
          <Grid container columns={2} stackable>
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
      </Grid.Row>
    </Layout>
  );
};

export default NotesPage;
