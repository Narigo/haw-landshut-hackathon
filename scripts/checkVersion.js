var pkg = require("../package.json");

var curNodeVersion = process.version;

if (!pkg.engines || !pkg.engines.node) {
  console.warn(
    'No Node version specified in package.json. If you want to check the version, add \'"engines": {"node":"' +
      curNodeVersion.replace(/^v/, "") +
      "\"}' to your package.json."
  );
  process.exit(0);
}

var pkgNodeVersion = "v" + pkg.engines.node;

if (curNodeVersion === pkgNodeVersion) {
  process.exit(0);
} else {
  console.log("Current Node version does not match package.json.");
  console.log(curNodeVersion, "!==", pkgNodeVersion);
  process.exit(1);
}
