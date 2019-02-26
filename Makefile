.PHONY: doctor build serve styles github deploy

doctor:
	bundle exec jekyll doctor

build: doctor
	bundle exec jekyll build --incremental

serve: doctor
	bundle exec jekyll serve --incremental

styles:
	sass --sourcemap=none --watch scss:css

github:
	git push origin master

deploy:
	netlify deploy --prod -d _site
