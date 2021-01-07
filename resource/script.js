// Loading spinner
setTimeout(function() {
    document.getElementById("loading").classList.add("animated");
    document.getElementById("loading").classList.add("fadeOut");
    setTimeout(function() {
      document.getElementById("loading").classList.remove("animated");
      document.getElementById("loading").classList.remove("fadeOut");
      document.getElementById("loading").style.display = "none";
    }, 800);
  }, 1500);

// Magic Grid
// TODO Customize
const magicProjectsGrid = new MagicGrid({
    container: "#project_section",
    animate: false,
    gutter: 30, // default gutter size
    static: true,
    useMin: false,
    maxColumns: 2,
    useTransform: true
  });

  const magicForksGrid = new MagicGrid({
    container: "#experience_section",
    animate: false,
    gutter: 30, // default gutter size
    static: true,
    useMin: false,
    maxColumns: 2,
    useTransform: true
  });

  $("document").ready(() => {
    magicProjectsGrid.listen();
    magicForksGrid.listen();
  });