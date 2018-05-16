var savedFile = {
  extension: "jpg",
  name: "repost",
  size: 14040
};

function fileSummary(file) {
  return `The file ${file.name}.${file.extension} has size ${file.size}.`;
}

fileSummary(savedFile); //The file repost.jpg has size 14040.

//----------------
//Using destructuring

function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} has size ${size}.`;
}
fileSummary(savedFile); //The file repost.jpg has size 14040.

// For more than 1 objects:
function fileSummary({ name, extension, size }, { color }) {
  return `Color is ${color}. The file ${name}.${extension} has size ${size}.`;
}

fileSummary(savedFile, { color: red }); //Color is red. The file repost.jpg has size 14040.
