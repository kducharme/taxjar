---
title: Mixins
meta:
  - name: Mixins
---

# Mixins

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

**\_mixins.scss**

```scss
// Dependencies
@import "variables";

// Flexbox-related
@mixin display-flex($direction, $justify, $align) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
}
```
