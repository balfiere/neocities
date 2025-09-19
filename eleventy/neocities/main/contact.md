---
title: contact me
layout: main.liquid
permalink: "/contact.html"
---

# contact

if you'd like to leave a quick note for me, feel free to comment on my [neocities profile](https://neocities.org/site/kwaamfan){target="_blank"} or say something in the chatbox to the right. if you want to discuss something more at length, you can also email me: [click to show email](){#contact onclick="showEmail(event)"}.

<script>

function showEmail(event) {
    const form = document.getElementById("contact");
    if (form.getAttribute("href") == undefined) {
        event.preventDefault();        
    }
    var encEmail = "YmFsZmllcmVAcHJvdG9uLm1l";
    form.setAttribute("href", "mailto:".concat(atob(encEmail)));
    form.innerHTML = atob(encEmail);
}

</script>