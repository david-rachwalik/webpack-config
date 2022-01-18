module.exports = {
    // Since React 17+, able to opt into not needing to import React into JSX using runtime: "automatic"
    presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
};
