RAKE = rake
TSC  = tsc

# The default target:

all: clarity.js

.PHONY: all

# Rules for development:

clarity.js: clarity.ts
	@$(TSC)

clarity.d.ts: clarity.js

clean:
	@rm -Rf clarity.js clarity.d.ts *~

distclean: clean

mostlyclean: clean

maintainer-clean: clean

.PHONY: clean distclean mostlyclean maintainer-clean

.SECONDARY:
.SUFFIXES:
