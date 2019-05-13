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
import "semantic-ui-css/semantic.css";
import "./index.css";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import HeaderTemp from "../components/Header/Header";
// import containerStyles from "./layout.module.css";

const MainLayout = ({ children, pathname }) => {
  return (
    <div style={{ padding: 15 }}>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <Grid container celled>
        <Grid.Row>
          <Grid.Column width={16}>
            <HeaderTemp pathname={pathname} />
          </Grid.Column>
        </Grid.Row>
        {children}
      </Grid>
    </div>
  );
};

export default MainLayout;
