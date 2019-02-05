.PHONY: doctor build serve deploy

  doctor:
		bundle exec jekyll doctor

  build: doctor
		bundle exec jekyll build --incremental

  serve: doctor
		bundle exec jekyll serve --incremental

  deploy:
		git push origin master
		rsync -crz \
     --exclude-from='rsync-exclude.txt' \
     --delete _site/ cfinazzo1@chrisfinazzo.com:/home/cfinazzo1/chrisfinazzo.com
