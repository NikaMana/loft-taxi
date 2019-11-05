import React from 'react';
import { configure } from "@storybook/react";
import requireContext from "require-context.macro";
import { addDecorator } from "@storybook/react";

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
