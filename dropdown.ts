import dropdown from '@lit-any/forms/lib/components/dropdown'
import { html } from 'lit-html'
import { repeat } from 'lit-html/directives/repeat'

export default dropdown(({ items }) => (f, id, v, set) => {
    import('@vaadin/vaadin-dropdown-menu/vaadin-dropdown-menu')
    import('@vaadin/vaadin-list-box/vaadin-list-box')
    import('@vaadin/vaadin-item/vaadin-item')

    if (items instanceof Promise) {
        throw new Error('Promise is not supported with vaadin-dropdown-menu')
    }

    let options
    if (typeof items === 'function') {
        options = items(f)
    } else {
        options = items
    }

    function renderItem(option) {
        return html`<vaadin-item value="${option.value}">${option.label}</vaadin-item>`
    }

    return html`<vaadin-dropdown-menu label="${f.title}"
                                         @value-changed="${e => set(e.target.value)}"
                                         ?required="${f.required}"
                                         value="${v}">
    <template>
        <vaadin-list-box>${repeat(options, renderItem)}</vaadin-list-box>
    </template>
</vaadin-dropdown-menu>`
})
