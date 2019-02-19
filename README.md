# style
> HOC to write react component with Style

### Demo
https://codesandbox.io/s/6l0mkwk79n

### Install

```bash
$ yarn add @ronin/style
```

### Usage

```jsx harmony
import Style from '@ronin/style';

const App = () => <div className="App">
  <Style color="red" fontWeight="bold">
    <h1>I'm so Stylish</h1>
  </Style>
</div>
```

This will output:

```html
    <div class="App">
      <h1 style="color: red; font-weight: bold;">I'm so Stylish</h1>
    </div>
```

You can also Style text, it will wrap them with `span` element by default.
You can pass `type` prop with the you want instead:

```jsx harmony
<Style type="p" color="red">I'm a stylish text</Style>
```

`Style` accepts any valid JavaScript/JSX style attributes as props.
