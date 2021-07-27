const fractal = module.exports = require("@frctl/fractal").create();
const doxray = require("doxray");
const docs = doxray(["src/css/abstracts/_properties.css"]);
const nunj = require("@frctl/nunjucks")({
    globals: {
        docs
    }
});

fractal.set("project.title", "Looseleaf Framework");
fractal.components.engine(nunj);
fractal.components.set("ext", ".njk");
fractal.components.set("path", __dirname + "/src/components");
fractal.web.set("server.sync", true);
fractal.web.set("server.syncOptions", {
    files: ["dist/**/*"]
});
fractal.web.set("static.path", __dirname + "/dist");
fractal.web.set("static.mount", "assets");
fractal.web.set("builder.dest", __dirname + "/build");
fractal.docs.set("path", __dirname + "/src/docs");
fractal.docs.engine(nunj);
