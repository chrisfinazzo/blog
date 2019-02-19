.PHONY: doctor build serve styles

doctor:
	bundle exec jekyll doctor

build: doctor
	bundle exec jekyll build --incremental

serve: doctor
	bundle exec jekyll serve --incremental

styles:
	sass --sourcemap=none --watch scss:css

deploy:
	netlify deploy --prod -d _site
