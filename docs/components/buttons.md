---
title: Buttons
meta:
  - name: buttons
---

# Buttons
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

[[toc]]

### Global Classes
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

<button class='button'>Global button</button>

```html
<button class='button'>Global button</button>
```
```scss
// Dependencies
@import "variables";

.button {
  font-weight: $weightMedium;
  border-radius: $radius;
  height: 40px;
  padding: 0 12px;
  color: white;
  font-size: 14px;
  border: none;
}
.button:hover {
  cursor: pointer;
}
```

### Primary Buttons
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

<button class='button button__primary'>Primary button</button>

```html
<button class='button button__primary'>Primary button</button>
```
```scss
// Dependencies
@import "variables";

.button__primary {
  background-color: $colorGreen;
  border: 1px solid $colorGreenDark;
}
.button__primary:hover {
  background-color: $colorGreenDark;
}
```



<style>
.button {
  background-color: gray;
  height: 40px;
  padding: 0 12px;
  border-radius: 3px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
}
.button:hover {
  cursor: pointer;
}

.button__primary {
  background-color: #3FAE2A;
  border: 1px solid #399C47;
}

.button__primary:hover {
  background-color: #399C47;
}


</style>

