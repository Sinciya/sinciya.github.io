$(document).ready(function() {
    // GSAP動畫
    gsap.from(".overlay", { duration: 1.5, opacity: 0, y: -50, ease: "back" });
    gsap.from(".header-title", { duration: 1.5, opacity: 0, y: -50, ease: "back" });
    gsap.from(".text-style", { duration: 1.5, opacity: 0, y: -50, ease: "back" });

    // ScrollMagic控制器
    var controller = new ScrollMagic.Controller();

    // 圖片視差效果
    $(".parallax").each(function() {
        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.9,
            duration: "100%"
        })
        .setTween(gsap.from(this, { y: "-50%", ease: "none" }))
        .addTo(controller);
    });

    // 其他滾動動畫
    $("section").each(function() {
        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.9,
            reverse: false
        })
        .setTween(gsap.from(this, { opacity: 0, y: 50, duration: 0.5 }))
        .addTo(controller);
    });
});

const texts = ["Creative Maker", "Writer", "Game Designer","Programmer","Researcher"];
        const interval = 2000; // 2 seconds
        let index = 0;

        function rotateText() {
            const rotatingText = document.getElementById("rotating-text");
            rotatingText.classList.remove("fade-in");
            rotatingText.classList.add("fade-out");

            setTimeout(() => {
                index = (index + 1) % texts.length;
                rotatingText.textContent = texts[index];
                rotatingText.classList.remove("fade-out");
                rotatingText.classList.add("fade-in");
            }, 500); // The duration of the fade-out animation
        }

        setInterval(rotateText, interval);