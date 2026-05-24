# Dra. Carla Dower - Landing Page

Landing page estática da Dower Advocacia Internacional, feita em HTML, CSS e JavaScript puro.

## Estrutura

- `index.html` - conteúdo da página, seções, depoimentos e estrutura.
- `style.css` - visual, responsividade, botões, header e layout.
- `script.js` - links de WhatsApp, Instagram, Google Maps, menu mobile e carrossel.
- `assets/` - imagens ativas da página.
- `assets/referencias/mockups/` - prints e referências usadas para reconstruir o layout.
- `assets/referencias/fotos-recebidas/` - fotos originais recebidas antes do recorte final.

## Como abrir localmente

Basta abrir `index.html` no navegador. Não precisa instalar framework ou rodar build.

## Atualizações rápidas

### WhatsApp, Instagram e Google Maps

Edite o bloco `CONTACT` no início de `script.js`:

- `phone` - número exibido em textos.
- `whatsappDigits` - número para o link `wa.me`, sem espaços ou símbolos.
- `mapsUrl` - link direto do Google Maps.
- `instagramUrl` - perfil do Instagram.
- `message` - mensagem pronta enviada pelo WhatsApp.

### Logo e fotos

Substitua mantendo os mesmos nomes:

- `assets/logo.png`
- `assets/hero-lawyer.png`
- `assets/about-lawyer.png`
- `assets/defesa-tecnica-lawyer.png`

Manter os nomes evita precisar mexer no HTML.

### Textos e depoimentos

Edite diretamente em `index.html`. Os depoimentos ficam na seção com `id="depoimentos"`.

## Publicação

Depois de alterar:

```bash
git status
git add .
git commit -m "Atualiza landing page"
git push origin main
```
