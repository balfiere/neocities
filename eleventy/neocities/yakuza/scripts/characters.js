gsap.registerPlugin(TextPlugin);

document.querySelectorAll("section").forEach(section => {
    const nameEl = section.querySelector(".name");
    const nameOriginal = nameEl.innerHTML;
    const nameReplace = nameEl.getAttribute("replace");

    const quoteEl = section.querySelector(".quote");
    const quoteOriginal = quoteEl.innerHTML;
    const descEl = section.querySelector(".desc");
    const descOriginal = descEl.innerHTML;

    descEl.innerHTML = "";

    let parallaxEnabled = false;
    let strength = { v: 0 }; // fade-in control

    // QuickTo setters for smoother, non-conflicting updates
    const setRotationX = gsap.quickTo(nameEl, "rotationX", { duration: 0.3, ease: "power2.out" });
    const setRotationY = gsap.quickTo(nameEl, "rotationY", { duration: 0.3, ease: "power2.out" });

    // Hover timeline: slide left, then enable tilt
    const hoverTl = gsap.timeline({ paused: true })
        .to(nameEl, {
            xPercent: -120,
            text: nameReplace,
            scale: 1.2,
            transformPerspective: 800,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
                parallaxEnabled = true;
                // fade strength from 0 → 1
                gsap.to(strength, { v: 1, duration: 0.7, ease: "power2.out" });
            }
        });

    const hoverTextTl = gsap.timeline({ paused: true })
    .to(quoteEl, {
        text: {
            value: "",
            speed: 4,
            padSpace: true,
        },
        ease: "power1.in"
    })
    .to(descEl, {
        text: {
            value: descOriginal,
            speed: 8,
        },
        ease: "power3.out"
    });

    // Leave timeline: reset everything
    const leaveTl = gsap.timeline({ paused: true })
        .to(nameEl, {
            xPercent: 0,
            duration: 2,
            scale: 1,
            transformPerspective: 1000,
            text: nameOriginal,
            ease: "power3.out",
            onStart: () => {
                parallaxEnabled = false;
                gsap.killTweensOf(strength);
                strength.v = 0;
            }
        })
        .to(nameEl, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "<"); // run at same time as xPercent reset

    const leaveTextTl = gsap.timeline({ paused: true })
    .to(descEl, {
        text: {
            value: "",
            speed: 8,
        },
        ease: "power3.out"
    }).to(quoteEl, {
        text: {
            value: quoteOriginal,
            speed: 4,
        },
        ease: "power1.in"
    });

    // Hover in
    section.addEventListener("mouseenter", () => {
        hoverTl.restart();
        hoverTextTl.restart();
    });

    // Hover out
    section.addEventListener("mouseleave", () => {
        leaveTl.restart();
        leaveTextTl.restart();
    });

    // Mouse move parallax
    section.addEventListener("mousemove", (e) => {
        if (!parallaxEnabled) return;

        const rect = section.getBoundingClientRect();
        const nameRect = nameEl.getBoundingClientRect();

        const offsetX = (e.clientX - nameRect.left - (nameRect.width / 4) / 2) / (nameRect.width / 2);
        // const offsetX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const offsetY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

        setRotationY(offsetX * 10 * strength.v);
        setRotationX(-offsetY * 10 * strength.v);
    });
});
