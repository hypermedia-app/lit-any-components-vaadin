# `dropdown`

#### `accepts items as () => Promise`

```html
<vaadin-dropdown-menu-text-field
  has-label=""
  tabindex="0"
>
  <slot
    name="prefix"
    slot="prefix"
  >
  </slot>
  <div
    part="value"
    slot=""
  >
  </div>
  <div
    aria-expanded="false"
    aria-label="Toggle"
    part="toggle-button"
    role="button"
    slot="suffix"
  >
  </div>
</vaadin-dropdown-menu-text-field>
<vaadin-dropdown-menu-overlay>
  <vaadin-list-box
    aria-orientation="vertical"
    role="list"
  >
    <vaadin-item
      aria-selected="false"
      tabindex="0"
      value="bar"
    >
      foo
    </vaadin-item>
  </vaadin-list-box>
</vaadin-dropdown-menu-overlay>
<iron-media-query style="display: none;">
</iron-media-query>
```

#### `accepts items as Promise`

```html
<vaadin-dropdown-menu-text-field
  has-label=""
  tabindex="0"
>
  <slot
    name="prefix"
    slot="prefix"
  >
  </slot>
  <div
    part="value"
    slot=""
  >
  </div>
  <div
    aria-expanded="false"
    aria-label="Toggle"
    part="toggle-button"
    role="button"
    slot="suffix"
  >
  </div>
</vaadin-dropdown-menu-text-field>
<vaadin-dropdown-menu-overlay>
  <vaadin-list-box
    aria-orientation="vertical"
    role="list"
  >
    <vaadin-item
      aria-selected="false"
      tabindex="0"
      value="bar"
    >
      foo
    </vaadin-item>
  </vaadin-list-box>
</vaadin-dropdown-menu-overlay>
<iron-media-query style="display: none;">
</iron-media-query>
```

#### `accepts items as array`

```html
<vaadin-dropdown-menu-text-field
  has-label=""
  tabindex="0"
>
  <slot
    name="prefix"
    slot="prefix"
  >
  </slot>
  <div
    part="value"
    slot=""
  >
  </div>
  <div
    aria-expanded="false"
    aria-label="Toggle"
    part="toggle-button"
    role="button"
    slot="suffix"
  >
  </div>
</vaadin-dropdown-menu-text-field>
<vaadin-dropdown-menu-overlay>
  <vaadin-list-box
    aria-orientation="vertical"
    role="list"
  >
    <vaadin-item
      aria-selected="false"
      tabindex="0"
      value="bar"
    >
      foo
    </vaadin-item>
  </vaadin-list-box>
</vaadin-dropdown-menu-overlay>
<iron-media-query style="display: none;">
</iron-media-query>

```

