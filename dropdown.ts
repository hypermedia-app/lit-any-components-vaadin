import dropdown from '@lit-any/forms/lib/components/dropdown'
import { html } from 'lit-html'
import { repeat } from 'lit-html/directives/repeat'
import { until } from 'lit-html/directives/until'

export default dropdown(({ items }) => (f, id, v, set) => {
  import('@vaadin/vaadin-dropdown-menu/vaadin-dropdown-menu')
  import('@vaadin/vaadin-list-box/vaadin-list-box')
  import('@vaadin/vaadin-item/vaadin-item')

  const optionsToRender = Promise.resolve().then(() => {
    if (typeof items === 'function') {
      return items(f)
    }

    return items
  })

  function renderItem(option) {
    return html`
      <vaadin-item value="${option.value}">${option.label}</vaadin-item>
    `
  }
  const vaadinList = optionsToRender.then(
    resolved => html`
      <template>
        <vaadin-list-box>${repeat(resolved, renderItem)}</vaadin-list-box>
      </template>
    `,
  )

  return html`
    <vaadin-dropdown-menu
      label="${f.title}"
      @value-changed="${e => set(e.target.value)}"
      ?required="${f.required}"
      value="${v}"
    >
      ${until(vaadinList, '')}
    </vaadin-dropdown-menu>
  `
})
