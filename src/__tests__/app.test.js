import React from "react";
import Menu from "../component/menu/index";
import Enzyme, { shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({
  adapter: new Adapter()
});
const props = {
  title: "NEVER BORED",
  menu: [
    {
      title: "Activities",
      key: "activities",
      data: [
        {
          title: "Recreational",
          key: "recreational",
          path: "/home/recreational"
        },
        {
          title: "Cooking",
          key: "cooking",
          path: "/home/cooking"
        }
      ]
    },
    {
      title: "Account",
      key: "account",
      data: [
        {
          title: "Profile",
          key: "profile",
          path: "/home/profile"
        },
        {
          title: "Settings",
          key: "settings",
          path: "/home/settings"
        }
      ]
    }
  ]
};

describe("Menu", () => {
  it("Menu Component should be render", () => {
    const menu = shallow(<Menu {...props} />);
    expect(menu.find("span").exists());
  });
  it("Menu Component length", () => {
    const menu = render(<Menu {...props} />);
    expect(menu.find(".menu-sub").length).toBe(2);
  });
});
