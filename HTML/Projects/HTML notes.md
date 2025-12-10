# HTML Quick Notes

## 1. Basic Structure 

Every HTML file must follow this standard structure to work correctly in a browser.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
  </head>
  <body></body>
</html>
```

- `<!DOCTYPE html>`: Tells the browser this is an HTML5 document.
- `<head>`: Contains metadata (like character set and title) that is not visible on the page.
- `<body>`: Contains everything visible to the user.

---

## 2. Text Formatting & Containers

### Headings

Headings define the structure of the content. `<h1>` is the largest, `<h6>` is the smallest.

- Used in project: `<h2>`, `<h3>`

### Paragraphs & Breaks

- `<p>`: Defines a block of text (paragraph).
- `<br>`: Inserts a single line break (useful in forms or addresses).

### Main Container

- `<main>`: Used to wrap the primary content of the page.

### Inline Styles

You can add basic styling directly to an element using the `style` attribute.

```html
<h2 style="text-align: center;">Centered Text</h2>
```

---

## 3. Lists

Used to organize items, like the "Project Experience" section in a resume.

### Unordered List (`<ul>`)

Creates a bulleted list. Each item is inside an `<li>` tag.

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
```

---

## 4. Tables

Used to display data in rows and columns (e.g., Educational Profile).

- `<table>`: The container for the table.
- `<tr>`: Table Row.
- `<th>`: Table Header (bold and centered by default).
- `<td>`: Table Data (standard cell).
- `border="1"`: Adds a basic outline to the table.

**Example Structure:**

```html
<table border="1">
  <tr>
    <th>Course</th>
    <th>Year</th>
  </tr>
  <tr>
    <td>MCA</td>
    <td>2013</td>
  </tr>
</table>
```

---

## 5. Forms

Forms are used to collect user input. The main container is `<form>`.

### The `<label>` Tag

Defines a label for an input element.

- **Best Practice:** The `for` attribute in the label should match the `id` of the input to link them together.

### Input Types (`<input>`)

The `type` attribute changes how the input behaves:

| Type       | Description                                   |
| :--------- | :-------------------------------------------- |
| `text`     | Standard single-line text field (e.g., Name). |
| `email`    | Validates that the text is an email address.  |
| `tel`      | Used for telephone numbers.                   |
| `number`   | Allows only numeric input.                    |
| `checkbox` | A box that can be checked or unchecked.       |

### Dropdown List (`<select>`)

Creates a dropdown menu. Each option is defined by `<option>`.

```html
<label for="size">Choose Size:</label>
<select name="size" id="size">
  <option value="" disabled selected>Select size</option>
  <option value="small">Small</option>
  <option value="large">Large</option>
</select>
```

### Multi-line Text (`<textarea>`)

Used for longer text, like addresses or comments.

- `rows`: Sets the height.
- `cols`: Sets the width.

### Buttons

- `<button type="submit">`: Submits the form data.

---

## 6. Important Attributes

- `id`: A unique identifier for an element (used with labels).
- `name`: The name of the data sent to the server when the form is submitted.
- `placeholder`: A hint text displayed inside the input field before the user types.
- `value`: The data associated with a specific option (in Select or Checkbox).
