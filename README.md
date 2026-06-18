# Royal Roofing Solutions

Zola static website for a residential roofing company. The project follows the same static-site approach as `../myblog`, with content in `content/`, templates in `templates/`, and static assets in `static/`.

## Local development

```sh
zola serve --interface 127.0.0.1 --port 1111
```

Open `http://127.0.0.1:1111`.

## Build

```sh
zola build
```

The built site is written to `public/`.

## Company details

These launch details live in `config.toml`:

- `base_url`
- `title`
- `extra.phone`
- `extra.phone_href`
- `extra.email`
- `extra.email_href`
- `extra.service_area`

The current contact form uses `mailto:` so the site remains fully static. For production, point the form at the final host's static form service or a dedicated form endpoint.
