import textbox from '@lit-any/forms/lib/components/textbox'
import { html } from 'lit-html'

export default textbox(({ type }) => (f, id, v, set) => {
    if (type === 'multi line') {
        import('@vaadin/vaadin-text-field/vaadin-text-area')
        return html`<vaadin-text-area 
                            label="${f.title}"
                            type="${type}"
                            .value="${v}"
                            ?required="${f.required}"
                            auto-validate
                            @value-changed="${e => set(e.target.value)}" ></vaadin-text-area>`
    }

    import('@vaadin/vaadin-text-field/vaadin-text-field')
    return html`<vaadin-text-field 
                        label="${f.title}"
                        type="${type}"
                        .value="${v}"
                        ?required="${f.required}"
                        auto-validate
                        @value-changed="${e => set(e.target.value)}"></vaadin-text-field>`
})
