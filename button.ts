import button from '@lit-any/forms/lib/components/button'
import { html } from 'lit-html'

export default button(({ label, onClick }) => {
    import('@vaadin/vaadin-button/vaadin-button')

    return html`<vaadin-button @click="${onClick}">${label}</vaadin-button>`
})
