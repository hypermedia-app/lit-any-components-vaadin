import { render as litRender } from 'lit-html'
import { fixture } from '@open-wc/testing'

export default async function render(
  componentFactory,
  field,
  id = 'id',
  value = '',
  setter = () => {},
) {
  const container = await fixture('<div></div>')

  litRender(await componentFactory(field, id, value, setter), container)

  return container.children[0]
}
