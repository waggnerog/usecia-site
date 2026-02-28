# CIA — Console Integrado de Análise
### Landing Page Institucional

Site estático institucional do CIA, pronto para publicação no GitHub Pages ou Cloudflare Pages.

---

## Estrutura do Projeto

```
landin-usecia/
├── index.html                        ← Home (landing page principal)
├── styles.css                        ← Folha de estilos global
├── main.js                           ← JavaScript (WhatsApp, formulário, menu)
├── 404.html                          ← Página de erro 404
├── README.md                         ← Este arquivo
│
├── assets/
│   └── img/
│       ├── hero-1.png                ← Mockup Hero (substituir)
│       ├── hero-2.png                ← Mockup Mapa Operacional (substituir)
│       ├── hero-3.png                ← Mockup Radar de Risco (substituir)
│       ├── og.png                    ← Imagem Open Graph (1200×630 px)
│       └── favicon.ico               ← Favicon
│
├── termos-de-uso/
│   └── index.html
├── politica-de-privacidade/
│   └── index.html
├── cookies/
│   └── index.html
├── seguranca/
│   └── index.html
├── acessibilidade/
│   └── index.html
└── contato/
    └── index.html
```

---

## Rodar Localmente

### Opção 1 — Python (recomendado)

```bash
# Acesse a pasta do projeto
cd caminho/para/landin-usecia

# Python 3
python -m http.server 8080

# Python 2 (legado)
python -m SimpleHTTPServer 8080
```

Acesse: **http://localhost:8080**

> ⚠️ **Importante:** Abra sempre via servidor local (`http://localhost`), nunca abrindo o arquivo diretamente no navegador (`file://`). Caminhos absolutos como `/styles.css` e `/main.js` não funcionam com `file://`.

### Opção 2 — Node.js (serve)

```bash
npx serve .
```

### Opção 3 — VS Code Live Server

Instale a extensão **Live Server** (ritwickdey.LiveServer) e clique em "Go Live".

---

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `seu-usuario/landin-usecia`)
2. Faça push de todos os arquivos para a branch `main`
3. Acesse **Settings → Pages**
4. Em "Source", selecione `Deploy from a branch` → `main` → `/ (root)`
5. Salve. O site estará disponível em `https://seu-usuario.github.io/landin-usecia/`

> **Nota:** Se o repositório usar um caminho diferente da raiz (ex.: `github.io/repositorio`), os caminhos absolutos (`/styles.css`, `/main.js`) **não funcionarão**. Nesse caso, adicione um arquivo `.nojekyll` na raiz e configure o base path, ou use um domínio customizado.

```bash
# Criar arquivo .nojekyll (necessário para pastas com _ e estrutura de subpastas)
touch .nojekyll
```

---

## Publicar no Cloudflare Pages

1. Acesse **dash.cloudflare.com → Pages → Create a project**
2. Conecte o repositório GitHub
3. Configurações de build:
   - **Build command:** *(deixar em branco — site estático)*
   - **Build output directory:** `/` (raiz)
4. Clique em "Save and Deploy"

---

## Onde Trocar as Imagens

Substitua os 3 arquivos abaixo em `/assets/img/`:

| Arquivo         | Onde aparece                          | Dimensão recomendada |
|-----------------|---------------------------------------|----------------------|
| `hero-1.png`    | Hero principal (lado direito)         | 1600 × 1000 px       |
| `hero-2.png`    | Seção Arquitetura — card esquerdo     | 1600 × 900 px        |
| `hero-3.png`    | Seção Arquitetura — card direito      | 1600 × 900 px        |
| `og.png`        | Open Graph (compartilhamento social)  | 1200 × 630 px        |

> **Caption fixo nas 3 imagens:** "Dados ilustrativos. Estrutura real do sistema."
> Para alterar o caption, busque por essa frase nos arquivos HTML.

---

## Onde Trocar WhatsApp e E-mail

### WhatsApp

Edite **`main.js`**, linhas 12–13:

```javascript
const WA_NUMBER  = '5511952855141';  // ← DDI + DDD + número (sem espaços ou caracteres)
const WA_MESSAGE =
  'Olá! Tudo bem?\n' +
  'Gostaria de solicitar uma demonstração do CIA...\n';  // ← edite a mensagem
```

### E-mail

Busque e substitua `contato@cia.com.br` em todos os arquivos HTML:

```
index.html
contato/index.html
termos-de-uso/index.html
politica-de-privacidade/index.html
cookies/index.html
seguranca/index.html
acessibilidade/index.html
```

---

## Paleta de Cores (CIA)

| Token          | Hex       | Uso principal                             |
|----------------|-----------|-------------------------------------------|
| Navy           | `#071C46` | Texto, botão primário, fundo footer       |
| Wine Dark      | `#301127` | Detalhes mínimos                          |
| Wine Mid       | `#7D3467` | Microdetalhes                             |
| Off-white      | `#FCFCFF` | Fundo principal de todas as páginas       |
| Teal Dark      | `#071B42` | Variante navy                             |
| Teal Light     | `#4AA6B1` | Links, ícones, eyebrows, foco             |

---

## Tipografia

- **IBM Plex Sans** — fonte principal (todos os textos)
- **IBM Plex Mono** — uso restrito para labels técnicos, eyebrows, footer col titles

Carregadas via Google Fonts no `<head>` de cada página.

---

## Revisão Jurídica

> ⚠️ As páginas legais (Termos, Privacidade, Cookies, Segurança, Acessibilidade) contêm modelos base com aviso de revisão no topo. **Recomenda-se fortemente a revisão por advogado especializado em direito digital e LGPD antes de publicar em produção.**

---

## Checklist antes de publicar

- [ ] Substituir `hero-1.png`, `hero-2.png`, `hero-3.png` com mockups reais
- [ ] Criar e adicionar `og.png` (1200×630) e `favicon.ico`
- [ ] Atualizar número WhatsApp em `main.js`
- [ ] Atualizar e-mail `contato@cia.com.br` em todos os arquivos
- [ ] Revisar páginas legais com assessoria jurídica
- [ ] Configurar DNS e domínio personalizado (opcional)
- [ ] Adicionar `.nojekyll` se publicar no GitHub Pages com subdiretório
- [ ] Testar navegação por teclado e leitores de tela
- [ ] Validar HTML: [validator.w3.org](https://validator.w3.org)
- [ ] Testar contraste: [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker)

---

© 2026 CIA — Console Integrado de Análise
