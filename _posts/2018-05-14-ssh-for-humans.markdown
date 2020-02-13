---
layout: post
title: SSH for Humans
---

Let&#8217;s Encrypt should _really_ think about getting into the business of managing SSH keys - it would save everyone (e.g, me) the headache of looking up credentials which haven&#8217;t been used since&#8230;

Actually, I have no idea, Whoops.

While it would be nice if DreamHost supported ED25519, 4096 bits will have to do for now. Transmit 5 can use them or even generate keys on its own - thanks to the instructions in this [video][] from [@antichrista][] - but for whatever reason won&#8217;t import my public key.

I don&#8217;t directly SCP or SFTP all that often, so it isn&#8217;t a dealbreaker. Gulp handles my [deploy][] script just fine.

[video]: https://twitter.com/antichrista/status/994270747567669248

[@antichrista]: https://twitter.com/antichrista

[deploy]: https://github.com/chrisfinazzo/microblog/blob/master/gulpfile.js
