function toCamelCase(str){
  return str
    .replace(/-|_/g, " ")
    .replace(/(?!^)\b(\w)/g, function (v) {
      return v.toUpperCase();
    })
    .replace(/\s/g, "");
}
