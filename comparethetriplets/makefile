.PHONY: test

NPM ?= $(shell which npm)
YARN ?= $(shell which yarn)
PKG_MANAGER ?= $(if $(YARN),$(YARN),$(NPM))


test:
	@$(PKG_MANAGER) run test -o --watch