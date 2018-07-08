---
title: Mixins
meta:
  - name: Mixins
---

# Mixins
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

**_mixins.scss**

```scss
@import 'variables';

// Flexbox-related
@mixin display-flex ($justify, $align, $direction) {
    display: flex;
    justify-content: $justify;
    align-items: $align;
    flex-direction: $direction;
}
```


