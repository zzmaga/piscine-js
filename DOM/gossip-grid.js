// gossip-grid.js
// ----------------------------------------------
// «Grid» для сплетен + ползунки настроек
// ----------------------------------------------
import { gossips } from './gossip-grid.data.js'

export function grid() {
  // ── helpers ──────────────────────────────────
  const qs  = sel => document.querySelector(sel)
  const qsa = sel => Array.from(document.querySelectorAll(sel))

  // применяется к ВСЕМ .gossip (включая те, что появятся позже)
  function applyStyles() {
    const w  = Number(widthInp.value)      // px
    const fs = Number(fontInp.value)       // px
    const bg = Number(bgInp.value)         // lightness %
    qsa('.gossip').forEach(card => {
      card.style.width      = w  + 'px'
      card.style.fontSize   = fs + 'px'
      card.style.background = `hsl(280,50%,${bg}%)`
    })
  }

  // ── ползунки ─────────────────────────────────
  const rangesWrap = document.createElement('div')
  rangesWrap.className = 'ranges'

  const makeRange = (id, min, max, val) => {
    const wrap  = document.createElement('div')
    wrap.className = 'range'
    const lbl   = document.createElement('label')
    lbl.htmlFor = id
    lbl.textContent = id
    const input = Object.assign(document.createElement('input'), {
      type: 'range', id, className: 'range',
      min, max, value: val
    })
    wrap.append(lbl, input)
    rangesWrap.append(wrap)
    input.addEventListener('input', applyStyles)
    return input
  }

  const widthInp = makeRange('width',     200, 800, 250)
  const fontInp  = makeRange('fontSize',   20,  40, 20)
  const bgInp    = makeRange('background', 20,  75, 50)

  document.body.append(rangesWrap)

  // ── первая карточка – форма ────────────────
  const formCard  = document.createElement('div')
  formCard.className = 'gossip'

  const ta = Object.assign(document.createElement('textarea'), {
    placeholder: 'Got a gossip to share?'
  })
  const btn = document.createElement('button')
  btn.textContent = 'Share gossip!'

  formCard.append(ta, btn)
  document.body.append(formCard)

  // ── готовые сплетни ─────────────────────────
  gossips.forEach(text => {
    const card = document.createElement('div')
    card.className = 'gossip'
    card.textContent = text
    document.body.append(card)
  })

  // ── submit handler ──────────────────────────
  btn.addEventListener('click', e => {
    e.preventDefault()
    const txt = ta.value.trim()
    if (!txt) return
    const newCard = document.createElement('div')
    newCard.className = 'gossip fade-in'
    newCard.textContent = txt
    formCard.replaceWith(newCard)   // форма → карточка
    applyStyles()                   // стили к новой
  })

  // ── начальные стили ─────────────────────────
  applyStyles()
}
