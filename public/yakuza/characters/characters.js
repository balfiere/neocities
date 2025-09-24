gsap.registerPlugin(TextPlugin);

document.querySelectorAll("section").forEach(section => {
    // name animation variables
    const nameEl = section.querySelector(".name");
    const nameReplace = nameEl.getAttribute("replace");
    const nameColor = nameEl.getAttribute("color");

    // backdrop animation variables
    const backdropEl = section.querySelector(".backdrop");
    const backdropColor = backdropEl.getAttribute("color") || "var(--backdrop-background-color-hover)";

    // card animation variables
    const quoteEl = section.querySelector(".quote");
    const quoteOriginal = quoteEl.innerHTML;
    quoteEl.innerHTML = "";
    const cardEl = section.querySelector(".card");
    const cardColor = getComputedStyle(document.querySelector(":root")).getPropertyValue("--card-background-color-hover");

    const descEl = section.querySelector(".desc");
    const descChildren = descEl.querySelectorAll("p, span");
    descChildren.forEach(el => {
        const strongEls = el.querySelectorAll("strong");
        strongEls.forEach(el => {
            el.style.color = nameColor === "white" ? getComputedStyle(document.querySelector(":root")).getPropertyValue("--backdrop-background-color-hover") : nameColor;
        });
        el.dataset.original = el.innerHTML;
        el.innerHTML = "";
    });

    const cardTl = gsap.timeline({ paused: true });

    const reverseTween = gsap
        .to(quoteEl, {
            text: {
                value: quoteOriginal
            },
            ease: "power2.in",
            duration: 0.5,
        })
        .reverse(0);
    cardTl.add(reverseTween);
    cardTl.to(cardEl, {
        backgroundColor: cardColor,
        duration: 0.5,
        ease: "power2.out",
    });

    descChildren.forEach((el, i) => {
        cardTl.to(el, {
            text: { value: el.dataset.original, speed: 9 },
            ease: "power2.inOut",
        }, "<0.3");
    });

    // name animation

    const nameTl = gsap.timeline({ paused: true })
        .to(nameEl, {
            text: "",
            ease: "power2.in",
            duration: 1.2,
        })
        .to(nameEl, {
            xPercent: -160,
            yPercent: -10,
            scale: 1.5,
            duration: 0,
            color: nameColor,
        })
        .to(nameEl, {
            text: {
                value: nameReplace,
                preserveSpaces: false
            },
            duration: 0.4,
            ease: "power2.out",
        });

    // backdrop animation

    const backdropTl = gsap.timeline({ paused: true })
        .to(backdropEl, {
            x: -10,
            y: 10,
            backgroundColor: backdropColor,
            duration: 0.3,
            ease: "none"
        });

    // animations run on hover

    section.addEventListener("mouseenter", () => {
        nameTl.restart();
        backdropTl.restart();
        cardTl.restart();
    });

    section.addEventListener("mouseleave", () => {
        nameTl.reverse();
        backdropTl.reverse();
        cardTl.reverse();
    });
});
