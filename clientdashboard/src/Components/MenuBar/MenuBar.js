import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

class MenuBar extends Component {
  state = { activeItem: 'dashboard' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name="dashboard" active={activeItem === 'dashboard'} onClick={this.handleItemClick} />
          <Menu.Item name="detail" active={activeItem === 'detail'} onClick={this.handleItemClick} />
          <Menu.Item name="summary" active={activeItem === 'summary'} onClick={this.handleItemClick} />
        </Menu>
      </Segment>
    );
  }
}

export default MenuBar;
