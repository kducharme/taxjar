---
title: Inputs
meta:
  - name: Inputs
---

# Inputs

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Global input styles

</br>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.


```html
<input class='taxjar__input'>
```

```scss
@import 'variables'

input:active, input:focus, textarea:active, textarea:focus {
  -webkit-transition: none;
  -moz-transition: none;
  -ms-transition: none;
  -o-transition: none;
  outline: none;
}

textarea {
  resize: none;
  padding: 16px 16px 0 16px;
}

::placeholder {
  color: $colorGrayRegular;
}

.taxjar__input {
  border: 1px solid $colorGrayRegular;
  border-radius: $radius;
  color: $colorFontDark;
  font-size: 14px;
  padding-left: 16px;
}
```

### Text input

</br>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</br>
<div class='flex'>
  <label class='taxjar__label'>First name</label>
  <input class='taxjar__input input__text' type='text' placeholder='Enter first name'/>
</div>

</br>

```html
<label for='firstName' class='taxjar__label'>Label text</label>
<input class='taxjar__input input__text' id='firstName' type='text' placeholder='Placeholder text'>
```

### Textarea

</br>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</br>
<div class='flex'>
  <label class='taxjar__label'>Transaction description</label>
  <textarea class='taxjar__input input__textarea' rows='5' placeholder='Enter description'></textarea>
</div>

</br>

```html
<label for='description' class='taxjar__label'>Transaction description</label>
<textarea class='taxjar__input input__textarea' id='description' rows='5' placeholder='Enter description'></textarea>
```

```scss
.input__textarea {
  padding: 16px 16px 0 16px;
}

.input__textarea:focus, .input__textarea:active  {
  padding: 15px 15px 0 15px;
}

```








<style>

/* Global styles */

* {
  box-sizing: border-box;
  margin: 0;
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

input:active, input:focus, textarea:active, textarea:focus {
  -webkit-transition: none;
  -moz-transition: none;
  -ms-transition: none;
  -o-transition: none;
  outline: none;
}

textarea {
  resize: none;
}

::placeholder {
  color: #B7B7B8;
}

.taxjar__input {
  width: 450px;
  border: 1px solid #B7B7B8;
  border-radius: 3px;
  padding-left: 16px;
  font-size: 14px;
  color: #170B28;
}

.taxjar__input:active, .taxjar__input:focus {
  border: 2px solid #399C47;
}

.taxjar__label {
  font-size: 13px;
  color: #303136;
  margin-bottom: 8px;
}

/* Text input */

.input__text {
  height: 40px;
}

.input__text:focus, .input__text:active {
  padding-left: 15px;
}

/* Textarea */
.input__textarea {
  padding: 16px 16px 0 16px;
}

.input__textarea:focus, .input__textarea:active  {
  padding: 15px 15px 0 15px;
}

</style>
