# Tlahtolli AI

Aprende vocabulario y expresiones en inglés y otros idiomas con Tlahtolli AI, que combina IA y repetición espaciada para un aprendizaje duradero.

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation

## Analytics (GA4) — Usage Guide

> **Scope:** How to **use** the existing tracking. *Implementation details are intentionally omitted.*

---

### Send events

Use the helper:

```ts
track(name: string, params?: Record<string, any>): void
```

Guidelines:

- Prefer **GA4 recommended event names** when they exist (e.g., `select_content`, `generate_lead`, `sign_up`, `login`, `search`).
- Use **snake_case** for parameter keys.
- **Do not send PII** (no emails, names, phone numbers).
- `page_view` is already sent (initial load + route changes). **Do not** send it manually.

---

### Common parameters (suggested)

- `content_type` — kind of content (`'nav'`, `'auth'`, `'social'`, …)
- `item_id` — stable identifier of the item/action
- `link_text`, `link_url` — visible text and URL (when relevant)
- `location` — where it happened (`'header'`, `'footer'`, `'mobile_menu'`)
- `position` — index/order (number)
- `outbound` — leaves our domain? (boolean)
- `site_area` — `'landing'` or `'app'`
- `destination` — `'app'` or `'web'`
- `social_network` — `'Instagram'`, `'YouTube'`, etc.
- Optional when applicable: `value` (number), `currency` (string), `method` (auth)

> If you need a parameter in GA reports, add it as a **Custom dimension** (GA4 → Admin → *Custom definitions*).

---

### Recommended events & minimal examples

#### 1) Navigation (header/footer/menu) — `select_content`

```tsx
onClick={() =>
  track('select_content', {
    content_type: 'nav',
    item_id: 'pricing',
    link_text: 'Pricing',
    link_url: 'https://www.tlahtolli.ai/#pricing',
    location: 'header',
    position: 3,
    outbound: false,
    site_area: 'landing',
  })
}
```

#### 2) CTA to the app — `generate_lead`

```tsx
onClick={() =>
  track('generate_lead', {
    cta: 'header_signup',
    destination: 'app',
    site_area: 'landing',
    // value: 0,
    // currency: 'MXN',
  })
}
```

#### 3) Authentication (in the app) — `sign_up` / `login`

```ts
track('sign_up', { method: 'email', site_area: 'app' })
track('login',   { method: 'email', site_area: 'app' })
```

#### 4) Internal search — `search`

```ts
track('search', { search_term: 'phrasal verbs', site_area: 'app', results_count: 23 })
```

#### 5) Social links (footer) — `select_content`

```tsx
onClick={() =>
  track('select_content', {
    content_type: 'social',
    item_id: 'instagram',
    social_network: 'Instagram',
    link_url: 'https://www.instagram.com/tlahtolli.ai/',
    location: 'footer',
    outbound: true,
    site_area: 'landing',
  })
}
```

#### 6) Content cards (in the app) — `view_item` / `select_item`

```ts
track('view_item',  { item_id: 'card_123', item_name: 'Present Perfect', language: 'en', site_area: 'app' })
track('select_item',{ item_id: 'card_123', item_list_id: 'deck_A', position: 5, site_area: 'app' })
```

---

### Conventions

- Standard GA4 names when available; otherwise use clear custom names.
- Keep values short and stable (IDs over long labels).
- Avoid duplicates: let the router send `page_view` automatically.

---

### Quick validation

- **Realtime / DebugView** in GA4: verify events and parameters.
- Browser **Network** tab: look for `https://www.google-analytics.com/g/collect?...` with `en=<event>`.
- In dev, the helper logs to console: `"[GA4]" <event> {params}`.
