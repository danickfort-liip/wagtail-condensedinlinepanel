npm_deps:
	yarn install

build: npm_deps
	npm run build

dev: npm_deps
	npm run dev

check: npm_deps
	npm run dev:check
