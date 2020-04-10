
task default: [:build]

task :build do
    sh 'bundle exec jekyll build --incremental'
end

task :deploy do
    sh 'netlify deploy --prod -d _site'
end

task :doctor do
    sh 'bundle exec jekyll doctor'
end

task :draft do

File.open("_drafts/new.md", "w") do |post|
      post.puts("---")
      post.puts("layout: post")
      post.puts("title: ")
      post.puts("---")
      post.puts
    end
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
    sh 'sass --sourcemap=none --watch scss:css'
end

task :tags do
    sh 'git push origin --tags'
end
