const fs = require("fs"); // To read the file system
const yaml = require("js-yaml"); // To parse YAML

// Function to convert YAML file to JSON
function convertYamlToJson(filePath) {
  try {
    // Read YAML file
    const yamlFile = fs.readFileSync(filePath, "utf8");

    // Convert YAML to JSON
    const jsonData = yaml.load(yamlFile);

    // Print the JSON equivalent
    console.log(JSON.stringify(jsonData, null, 2)); // Pretty print JSON
  } catch (e) {
    console.error("Error reading or parsing YAML file:", e);
  }
}

// Call the function with the path to your YAML file
convertYamlToJson("./007.yaml"); 
