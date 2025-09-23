gsap.registerPlugin(TextPlugin);

document.querySelectorAll("section").forEach(section => {
    const nameEl = section.querySelector(".name");
    const nameReplace = nameEl.getAttribute("replace");
    const nameColor = nameEl.getAttribute("color");

    const quoteEl = section.querySelector(".quote");
    const descEl = section.querySelector(".desc");
    const descOriginal = descEl.innerHTML;

    const backdropEl = section.querySelector(".backdrop");
    const backdropColor = backdropEl.getAttribute("color");

    descEl.innerHTML = "";

    const nameTl = gsap.timeline({ paused: true })
        .to(nameEl, {
            text: "",
            ease: "power2.in",
            duration: 0.7,
        })
        .to(nameEl, {
            xPercent: -120,
            scale: 1.2,
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

    const backdropTl = gsap.timeline({ paused: true })
        .to(backdropEl, {
            x: -10,
            y: 10,
            backgroundColor: backdropColor,
            duration: 0.3,
            ease: "none"
        });

    const hoverTextTl = gsap.timeline({ paused: true })
        .to(quoteEl, {
            text: {
                value: "",
                // padSpace: true,
            },
            ease: "power2.in",
            duration: 0.5,
        })
        .to(descEl, {
            text: {
                value: descOriginal,
                speed: 4,
            },
            ease: "power2.out",
            // duration: 3,
        });

    section.addEventListener("mouseenter", () => {
        nameTl.restart();
        backdropTl.restart();
        hoverTextTl.restart();
    });

    section.addEventListener("mouseleave", () => {
        nameTl.reverse();
        backdropTl.reverse();
        hoverTextTl.reverse();
    });
});
