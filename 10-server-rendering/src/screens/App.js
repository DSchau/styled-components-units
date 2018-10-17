import React, { Component } from 'react';
import { Route } from 'react-router';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout';
import NewPost from './NewPost';
import Post from './Post';
import Posts from './Posts';

import THEME from '../style/theme';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light'
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light'
    }));
  }

  render() {
    const theme = THEME[this.state.theme];
    return (
      <ThemeProvider theme={theme}>
        <Layout onThemeToggle={this.toggleTheme}>
          <Route path="/" component={Posts} exact />
          <Route path="/new" component={NewPost} exact />
          <Route path="/posts/:slug" component={Post} />
        </Layout>
      </ThemeProvider>
    );
  }
}
