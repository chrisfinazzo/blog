---
layout: default
title: "Contact Me"
---
If you are looking for a passionate, committed addition to your team, you've come to the right place. If you have a specific project in mind, please tell me about it. I look forward to working with you.
<form action="/thank-you" name="contact" method="POST" netlify-honeypot="spambots" data-netlify="true">
  <p style="visibility: hidden">
    <label>Don&rsquo;t fill this out if you're human: <input name="spambots" /></label>
  </p>
<label for="fname">First Name</label>
    <br />
    <input type="text" id="fname" name="firstname" placeholder="John">
    <br />
    <br />
    <label for="lname">Last Name</label>
    <br />
    <input type="text" id="lname" name="lastname" placeholder="Smith">
    <br>
    <br>
    <label for="email">Email</label>
    <br>
    <input type="text" id="email" name="email" placeholder="john.smith@example.com">
    <br>
    <br>
    <label for="message">Message</label>
    <br>
    <textarea id="message" name="message" placeholder=""></textarea>
    <br>
    <br>
    <div data-netlify-recaptcha></div>
    <br>
    <br>
    <input type="submit" value="Submit" style="">
</form>
