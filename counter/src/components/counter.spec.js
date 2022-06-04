/**
 * @vitest-environment happy-dom
 */

import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Counter from "./Counter.vue";

describe("counter funtionality", () => {
  it("should render", () => {
    const wrapper = mount(Counter);
    expect(wrapper.text()).toContain("Super contador");
  });

  it("should the count value change from 0 to 1", async () => {
    const wrapper = mount(Counter);
    const counter = wrapper.find("h2");
    const button = wrapper.find("button");

    expect(counter.text()).toBe("0");
    await button.trigger("click");
    expect(counter.text()).toBe("1");
  });
});
