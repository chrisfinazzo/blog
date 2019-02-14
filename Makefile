.PHONY: doctor build serve

doctor:
	bundle exec jekyll doctor

build: doctor
	bundle exec jekyll build --incremental

serve: doctor
	bundle exec jekyll serve --incremental
