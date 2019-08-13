const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval : 2000
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

const materialBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBox);

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll,{scrollOffset:30});