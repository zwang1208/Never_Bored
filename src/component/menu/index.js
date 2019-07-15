import React, { Component } from "react";

import "./style.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: []
    };
  }
  onItemClick = () => {};
  isOpen = key => {
    return this.state.open.includes(key);
  };
  onSwitchList = key => {
    if (this.isOpen(key)) {
      this.setState({
        open: this.state.open.filter(openKey => openKey !== key)
      });
    } else {
      this.setState({
        open: [...this.state.open, key]
      });
    }
  };
  onInnerItemClick(item) {
    this.props.callback && this.props.callback(item);
    this.props.history.push(item.path);
    this.setState({
      select: item.key
    });
  }
  isActive(key) {
    const pathname = this.props.location.pathname;
    let select = pathname.indexOf(key) !== -1;
    return !!select ? "active" : "";
  }
  updateMenu() {
    if (!this.props.location) return;
    const pathname = this.props.location.pathname;
    this.props.menu.map(item => {
      const isMatch = item.data.find(item => pathname.indexOf(item.key) !== -1);
      if (!!isMatch) {
        this.setState({
          open: [item.key]
        });
      }
      return item;
    });
  }
  jumpToLanding = () => {
    this.props.history.push("/");
  };
  componentDidMount() {
    this.updateMenu();
  }
  render() {
    const { menu } = this.props;
    return (
      <div className="menu">
        <div className="menu-title" onClick={this.jumpToLanding}>
          {this.props.title}
        </div>
        {menu.map(item => {
          return (
            <div
              key={item.key}
              onClick={this.onItemClick}
              className={`menu-sub ${
                this.isOpen(item.key) ? "menu-sub-open" : ""
              }`}
            >
              <div
                onClick={() => this.onSwitchList(item.key)}
                className="menu-item"
              >
                <span>{item.title}</span>
                <i className="menu-submenu-arrow" />
              </div>
              {this.isOpen(item.key) && (
                <div className="menu-list">
                  {item.data.map(_item => {
                    return (
                      <div
                        className={this.isActive(_item.key)}
                        onClick={()=>this.onInnerItemClick(_item)}
                        key={_item.key}
                      >
                        <span>{_item.title}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}   
      </div>
    );
  }
}

export default Menu