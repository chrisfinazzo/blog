import 'dotenv/config.js';
import {Indiekit} from '@indiekit/indiekit';
import {JekyllPreset} from '@indiekit/preset-jekyll';
import {GithubStore} from '@indiekit/store-github';
import {MastodonSyndicator} from '@indiekit/syndicator-mastodon';
import {TwitterSyndicator} from '@indiekit/syndicator-twitter';

// Create a new indiekit instance
const indiekit = new Indiekit();

const jekyll = new JekyllPreset();

const github = new GithubStore({
  user: 'chrisfinazzo',
  repo: 'blog',
  branch: 'main',
  token: 'process.env.GITHUB_TOKEN'
});

const mastodon = new MastodonSyndicator({
  checked: true,
  forced: true,
  url: 'https://mastodon.social',
  user: 'chrisfinazzo'
});

const twitter = new TwitterSyndicator({
  checked: true,
  forced: true,
  user: 'chrisfinazzo'
});

const postTypes = [{
  type: 'post',
  name: 'Post',
  post: {
    path: '_posts/:year/:month/:day/:title/',
    url: '{yyyy}/{MM}/{DD}/{slug}/'
  },
  media: {
    path: 'src/articles/{yyyy}/{MM}/{slug}/{filename}',
    url: '{yyyy}/{MM}/{slug}/{filename}'
  }
}, {
  type: 'note',
  name: 'Note',
  post: {
    path: 'src/notes/{t}.md',
    url: 'notes/{t}/'
  }
}, {
  type: 'photo',
  name: 'Photo',
  post: {
    path: 'src/photos/{t}.md',
    url: 'photos/{t}/'
  },
  media: {
    path: 'src/media/{t}.{ext}',
    url: 'media/{t}.{ext}'
  }
}, {
  type: 'reply',
  name: 'Reply',
  post: {
    path: 'src/replies/{t}.md',
    url: 'replies/{t}/'
  }
}];

indiekit.set('publication.locale', 'en-US');
indiekit.set('publication.me', 'https://chrisfinazzo.com');
indiekit.set('publication.postTypes', postTypes);
indiekit.set('publication.preset', jekyll);
indiekit.set('publication.store', github);
indiekit.set('publication.syndicationTargets', [
  mastodon,
  twitter
]);
indiekit.set('publication.timeZone', 'America/New_York');

const server = indiekit.server();

export default server;
