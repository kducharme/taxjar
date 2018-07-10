---
title: Inputs
meta:
  - name: Inputs
---

# Inputs

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Text input

</br>

All inputs inherit a global class that defines general styles, which can be overridden by more specific classes depending on the use case.

</br>
<div class='flex'>
  <label for='sample' class='taxjar__label'>Label text</label>
  <input class='taxjar__input' type='text' placeholder='Placeholder text'/>
</div>

</br>


```html
<label for='sample' class='taxjar__label'>Label text</label>
<input class='taxjar__input' id='sample' type='text' placeholder='Placeholder text'>
```

<style>

* {
  box-sizing: border-box;
  margin: 0;
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

input:active, input:focus {
  -webkit-transition: none;
  -moz-transition: none;
  -ms-transition: none;
  -o-transition: none;
  outline: none;
}

input::placeholder {
  color: #B7B7B8;
}

.taxjar__input {
  height: 40px;
  width: 450px;
  border: 1px solid #B7B7B8;
  border-radius: 3px;
  padding-left: 16px;
  font-size: 14px;
  color: #170B28;
}

.taxjar__input:active, .taxjar__input:focus {
  border: 2px solid #399C47;
  padding-left: 15px;
}

.taxjar__label {
  font-size: 13px;
  color: #303136;
  margin-bottom: 8px;
}

</style>
