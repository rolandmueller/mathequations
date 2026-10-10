# Equations explained colorfully: md/*.md → html/*.html
# Order and sections of html/index.html come from md/index.md.

set shell := ["bash", "-euo", "pipefail", "-c"]

tsx := "app/node_modules/.bin/tsx"
app_repo := "https://github.com/stared/equations-explained-colorfully.git"
app_rev := "19acd52742cfd02b56c3eb6726a9c581908e6ec9"

# List recipes
default:
    @just --list

# Clone the app at the pinned revision, apply patches/hover-fix.patch, install dependencies (Node + pnpm via npx)
install:
    [ -d app ] || git clone {{app_repo}} app
    git -C app cat-file -e {{app_rev}} 2>/dev/null || git -C app fetch origin
    cd app && if git apply --reverse --check ../patches/hover-fix.patch 2>/dev/null; then echo "hover fix already applied"; else git checkout -q {{app_rev}} && git apply ../patches/hover-fix.patch; fi
    cd app && npx -y pnpm@10.19.0 install --frozen-lockfile

# Compile all equations and the index page (schemes: vibrant, accessible, contrast, nocolor)
build scheme="vibrant":
    @[ -x {{tsx}} ] || just install
    {{tsx}} build/compile.ts --md md --out html --scheme {{scheme}}

# Build, then open the index page in the browser
open scheme="vibrant": (build scheme)
    open html/index.html

# Build, then serve html/ at http://localhost:{{port}}
serve port="8000" scheme="vibrant": (build scheme)
    uv run --no-project python -m http.server {{port}} --directory html

# Run the interactive editor (live preview of the app's own examples)
dev:
    @[ -x {{tsx}} ] || just install
    cd app && npx -y pnpm@10.19.0 dev

# Remove generated HTML
clean:
    rm -rf html
