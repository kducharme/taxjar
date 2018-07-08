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
  transition: all .2s ease-in-out;
}
.taxjar__button:hover {
  cursor: pointer;
  transition: all .2s ease-in-out;
}
```

### Neutral button

---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

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
```

### Primary buttons

---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

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
.taxjar__button {
  background-color: #FAFAFA;
  height: 40px;
  padding: 0 16px;
  border-radius: 5px;
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

.button__basic {
  color: #303136;
  background-color: #FAFAFA;
  border-color: #E2E2E2;
}

.button__basic:hover { background-color: #EFEFEF; }

.button__primary {
  color: #fff;
  background-color: #3FAE2A;
  border-color: #399C47;
}

.button__primary:hover { background-color: #399C47; }

</style>
