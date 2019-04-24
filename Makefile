.PHONY: build deploy doctor draft github perf proof serve styles tags

build: doctor
	bundle exec jekyll build --incremental

deploy:
	netlify deploy --prod -d _site

doctor:
	bundle exec jekyll doctor

draft:
	./draft new.md

github:
	git push origin master

perf:
	siege -c 20 -t 30S -b chrisfinazzo.com

proof: build
	htmlproofer --assume-extension ./_site

serve: doctor
	bundle exec jekyll serve --incremental

styles:
	sass --sourcemap=none --watch scss:css

tags:
	git push origin --tags
