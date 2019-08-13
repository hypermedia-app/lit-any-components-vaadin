import { expect } from '@open-wc/testing'
import '@vaadin/vaadin-dropdown-menu/vaadin-dropdown-menu'
import '@vaadin/vaadin-list-box/vaadin-list-box'
import '@vaadin/vaadin-item/vaadin-item'
import dropdown from '../dropdown'
import render from '../test/helper/render'
import { delay } from '../test/helper/async'

describe('dropdown', () => {
  it('accepts items as () => Promise', async () => {
    // given
    const options = {
      items: () =>
        Promise.resolve([
          {
            label: 'foo',
            value: 'bar',
          },
        ]),
    }

    // when
    const el = await render(dropdown(options), {})
    await delay(10)

    // then
    expect(el).shadowDom.to.equalSnapshot()
  })

  it('accepts items as Promise', async () => {
    // given
    const options = {
      items: Promise.resolve([
        {
          label: 'foo',
          value: 'bar',
        },
      ]),
    }

    // when
    const el = await render(dropdown(options), {})
    await delay(10)

    // then
    expect(el).shadowDom.to.equalSnapshot()
  })

  it('accepts items as array', async () => {
    // given
    const options = {
      items: [
        {
          label: 'foo',
          value: 'bar',
        },
      ],
    }

    // when
    const el = await render(dropdown(options), {})
    await delay(10)

    // then
    expect(el).shadowDom.to.equalSnapshot()
  })
})
