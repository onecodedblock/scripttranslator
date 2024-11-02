function translateCode() {
  const inputLang = document.getElementById("inputLang").value;
  const outputLang = document.getElementById("outputLang").value;
  const inputCode = document.getElementById("inputCode").value;

  let translatedCode = "";

  if (inputLang === "javascript" && outputLang === "python") {
    translatedCode = translateJavaScriptToPython(inputCode);
  } else if (inputLang === "python" && outputLang === "javascript") {
    translatedCode = translatePythonToJavaScript(inputCode);
  } else if (inputLang === "rust" && outputLang === "lua") {
    translatedCode = translateRustToLua(inputCode);
  } else {
    translatedCode = "Translation not supported for this language pair.";
  }

  document.getElementById("outputCode").value = translatedCode;
}

// Add function-based translations here
function translateJavaScriptToPython(code) {
  return code.replace(/console\.log\((.*)\);/g, "print($1)").replace(/let/g, "");
}

function translatePythonToJavaScript(code) {
  return code.replace(/print\((.*)\)/g, "console.log($1);");
}

function translateRustToLua(code) {
  // Basic translation for printing in Rust to Lua
  return code.replace(/println!\("(.*)"\);/g, 'print("$1")');
}
