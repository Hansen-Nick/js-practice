// In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.

//     The first number is the major version.
//     The second number is the minor version.
//     The third number is the patch (bug fixes).

// Write three separate functions, one to retrieve each element in the semantic versioning specification.

function retrieveMajor(semver) {
  let versionArray = semver.split(".");
  return versionArray[0];
}

function retrieveMinor(semver) {
  let versionArray = semver.split(".");
  return versionArray[1];
}

function retrievePatch(semver) {
  let versionArray = semver.split(".");
  return versionArray[2];
}
