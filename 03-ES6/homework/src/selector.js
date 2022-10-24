var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);
  if (startEl.children.length) {
    for (el of startEl.children) {
      resultSet.push(...traverseDomAndCollectElements(matchFunc, el));
    }
  }
  return resultSet;
};;
// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  //* Validamos si es id, class, tag.class o tag
  let type = "tag";
  if (selector.startsWith("#")) type = "id";
  if (selector.startsWith(".")) type = "class";
  if (!selector.startsWith(".") && selector.includes(".")) type = "tag.class";
  return type;
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (element) => {
      return "#" + element.id === selector;
    };
  } else if (selectorType === "class") {
    matchFunction = (element) => {
      for (c of element.classList) {
        console.log(element.classList[c]);
        if ("." + c === selector) return true;
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    matchFunction = (element) => {
      //* separamos la tag y la clase para evaluarlas
      let [tag, classTag] = selector.split(".");
      return (
        element.classList.length &&
        //* Validamos que tag y tagName sean iguales
        element.tagName.toLowerCase() === tag.toLowerCase() &&
        //* Validamos que classTag este dentro de la classList del elemento html
        element.classList.contains(classTag.toLowerCase())
      );
    };
  } else if (selectorType === "tag") {
    matchFunction = (element) => {
      //* validamos que el tag que recibimos sea igual al tagName
      return element.tagName.toLowerCase() === selector.toLowerCase();
    };
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
