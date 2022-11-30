# Responsive-Tabs
Responsive Tabs (using es6 classes)

# Description
A very simple responsive tabs. It is based on ES6 classes.
The desktop version behaves like regular tabs.
The mobile version transforms to accordion.
There are some oportunities like a collapsible and a changing size

PS. I'm not insisting that is the only correct solution. I have just written it for my personal use. Perhaps, it will be imroved in the future.

# Usage
It needs to be added to the html document inside head tag

```html
<link rel="stylesheet" href="tabs.css">
```
It needs to be added to the html document before </body> tag

```html
<script src="tabs.js"></script>
```
HTML code must be like this
```html
  <div id="tabs">
    <ul class="tabs">
      <li><a href="#tab1">Tab 1</a></li>
      <li><a href="#tab2">Tab 2</a></li>
      <li><a href="#tab3">Tab 3</a></li>
    </ul>
    <div class="tabs-container">
      <div class="tab-pane" id="tab1">
        <h3>Tab 1</h3>
      </div>
      <div class="tab-pane" id="tab2">
        <h3>Tab 2</h3>
      </div>
      <div class="tab-pane" id="tab3">
        <h3>Tab 3</h3>
      </div>
    </div>
  </div>
```

It needs to be added to the custom js file
```js script
const tabs = new ResponsiveTabs({
  el: '#tabs',
  collapse: true,
  size: 750 // your size
})
```

# API Documentation
Property  | Type    | Description                                                           | Default value 
--------- | ------  | --------------------------------------------------------------------- | -------------
**el**        | string  | ID of your element. Just like this '#id'                              | -
**collapse**  | boolean | Collapsible. Only for accordion. Opening item the others are closing. | true
**size**      | number  | The size of the screen when tabs adapts to accordion.                 | 750