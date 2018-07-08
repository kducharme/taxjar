---
title: Buttons
meta:
  - name: buttons
---

# Buttons

Throught TaxJar, buttons play an important role in helping guide users in the way they interact with and interpret the importance of content displayed on the screen.

[[toc]]

### Global button classes

---

</br>

All buttons inherit a global class that defines general styles, which can be overridden by more specific classes depending on the use case.

```html
<button class='taxjar__button'>Global button</button>
```

```scss
// Dependencies
@import "variables";

.taxjar__button {
  font-weight: $weightMedium;
  border-radius: $radius;
  height: 40px;
  padding: 0 12px;
  color: white;
  font-size: 14px;
  border: 1px solid;
  transition: all 0.2s ease-in-out;
}
.taxjar__button:hover {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
```

### Neutral button

---

<br>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</br>

<button class='taxjar__button button__basic'>Click me</button>

</br>

```html
<button class='taxjar__button button__basic'>Click me</button>
```

```scss
// Dependencies
@import "variables";

.button__basic {
  color: $colorGrayBlack;
  background-color: $colorGrayBackground;
  border-color: $colorGrayBorder;
}
.button__basic:hover {
  background-color: $colorGrayHover;
}
.button__basic:focus {
  background-color: $colorGrayBorder;
}
.button__basic:active {
  border: 2px;
}
```

### Primary buttons

---

</br>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</br>

<button class='taxjar__button button__primary'>Click me</button>

</br>

```html
<button class='taxjar__button button__primary'>Click me</button>
```

```scss
// Dependencies
@import "variables";

.button__basic {
  color: $colorGrayBlack;
  background-color: $colorGrayBackground;
  border-color: $colorGrayBorder;
}
.button__basic:hover {
  background-color: $colorGrayHover;
}
```

<style>

* {
  box-sizing: border-box;
  margin: 0;
}

button:active, button:focus {
  -webkit-transition: none;
  -moz-transition: none;
  -ms-transition: none;
  -o-transition: none;
  outline: none;
}

/* General button styles */

.taxjar__button {
  background-color: #FAFAFA;
  height: 36px;
  padding: 0 20px;
  border-radius: 3px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid;
  transition: all .2s ease-in-out;
}

.taxjar__button:hover {
  cursor: pointer;
  transition: all .2s ease-in-out;
}
.taxjar__button:active {
  box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.1);
}

/* Basic button styles */

.button__basic {
  color: #303136;
  background-color: #FAFAFA;
  border-color: #E2E2E2;
}

.button__basic:hover { background-color: #EFEFEF; }

.button__basic:active {
  background-color: #E2E2E2;
}

/* Primary button styles */

.button__primary {
  color: #fff;
  background-color: #3FAE2A;
  border: 1px solid #399C47;
  border-bottom: 2px solid #399C47;
  transition: all .2s ease-in-out;
}

.button__primary:hover {
  background-color: #399C47;
}

.button__primary:active {
  background-color: #2F8A3C;
  border: 1px solid #2F8A3C;
  border-bottom: 2px solid #2F8A3C;
}

</style>
