
task default: [:build]

task :build do
    sh 'bundle exec jekyll build --incremental && bundle exec jekyll webmention'
end

task :deploy do
    sh 'netlify deploy --prod -d _site'
end

task :doctor do
    sh 'bundle exec jekyll doctor'
end

task :post do

File.open("_drafts/new.markdown", "w") do |post|
      post.puts("---")
      post.puts("layout: post")
      post.puts("title: ")
      post.puts("---")
      post.puts
    end
    sh 'bbedit _drafts/new.markdown'
end

task :link do

File.open("_links/new.md", "w") do |post|
      post.puts("---")
      post.puts("layout: link")
      post.puts("title: ")
      post.puts("syndicate_to: [ mastodon ]")
      post.puts("---")
      post.puts
    end
    sh 'bbedit _links/new.md'
end

task :note do

File.open("_notes/new.md", "w") do |post|
      post.puts("---")
      post.puts("layout: note")
      post.puts("title: ")
      post.puts("syndicate_to: [ mastodon ]")
      post.puts("---")
      post.puts
    end
    sh 'bbedit _notes/new.md'
end

task :reply do

File.open("_notes/new.md", "w") do |post|
      post.puts("---")
      post.puts("layout: note")
      post.puts("title: ")
      post.puts("syndicate_to: [ mastodon ]")
      post.puts("user: ")
      post.puts("post-url: ")
      post.puts("---")
      post.puts
    end
    sh 'bbedit _notes/new.md'
end

task :repost do

File.open("_notes/new.md", "w") do |post|
      post.puts("---")
      post.puts("layout: note")
      post.puts("title: ")
      post.puts("syndicate_to: [ mastodon ]")
      post.puts("user: ")
      post.puts("post-url: ")
      post.puts("---")
      post.puts
    end
    sh 'bbedit _notes/new.md'
end

task :github do
    sh 'git push origin master'
end

task :perf do
    sh 'siege -c 20 -t 30S -b chrisfinazzo.com'
end

task :proof do
    sh 'htmlproofer --assume-extension ./_site'
end

task :styles do
    sh 'sass --watch --style=compressed scss/style.scss:css/style.css'
end

task :tags do
    sh 'git push origin --tags'
end
