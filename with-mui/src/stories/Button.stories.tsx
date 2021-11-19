import React from "react";
import {withKnobs, boolean, text, select, number} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";
import Button from "./Button";

const buttonsGroup = "Button knob";

export default {
  title: 'Button Components',
  decorators: [withKnobs],
};


export const Buttons = () => {
  const title = text("Button title", "Hello world", buttonsGroup);
  const disabled = boolean("Disabled", false, buttonsGroup);

  return (
    <div style={{padding: "20px"}}>
      <div>
        <div>
          <h2>Button</h2>
          <p>use knobs to play around with props</p>
          <Button
            variant={select("variant", ["outlined", "contained"], "contained", buttonsGroup)}
            color={select("color", ["primary", "secondary"], "primary", buttonsGroup)}
            title={title}
            disabled={disabled}
            onClick={action("doing an action")}
          />
        </div>
      </div>
    </div>
  );
};

