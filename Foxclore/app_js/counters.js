const counters = document.querySelectorAll(".counter"),
    speed = 10000;
counters.forEach(t => {
    const e = () => {
        const n = +t.getAttribute("data-target"),
            c = +t.innerText,
            o = n / speed;
        c < n && (t.innerText = "" + Math.ceil(c + o), setTimeout(e, 1))
    };
    e()
});