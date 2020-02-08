/**
  Создать и вернуть пустой объект
 */
function createObject() {
  let obj = {};
  return obj;
}

/**
 * Вернуть кол-во свойств объекта
 *
 * Пример
 * const obj = {
 *   name: 'Name',
 *   age: 11,
 * }
 *
 * getCountOfProp(a) = 2
 *
 * @param object
 */
function getCountOfProp(object) {
  let kolichestvo = 0;
  for (key in object) {
    kolichestvo = kolichestvo + 1;
  }
  return kolichestvo;
}

/**
 * Вернуть копию объекта
 * @param obj
 */
function copyObject(obj) {
  let clone = {};
  for (let key in obj) {
    clone[key] = obj[key];
  }

  return clone;
}

/**
 * Вернуть новый объект, включающий значения обоих
 * const a = { name: 'Max', };
 * const b = { age: 18, };
 * Пример
 * mergeObject(a, b) = { name: 'Max', age: 18, }
 */
function mergeObject(objectA, objectB) {
  let clone = {};
  for (key in objectA) {
    clone[key] = objectA[key];
  }
  for (key in objectB) {
    clone[key] = objectB[key];
  }
  return clone;
}

/**
 * Проверить наличие ключа
 * const a = { name: '1' }
 * hasKey(a, 'name') = true
 */
function hasKey(object, key) {
  for (key in object) {
    key = true;
  }
  return key;
}

/**
 * Добавить значение в объект
 * вернуть тот же объект
 * Пример
 * const a = { name: '1' };
 * const key = 'age';
 * const value = '18';
 * addToObject(a, key, value) = { name: '1', age: 18 }
 */
function addToObject(object, key, value) {
  object[key] = value;
  return object;
}

// https://github.com/zepster/js-lessons/issues/1

module.exports = {
  createObject,
  getCountOfProp,
  copyObject,
  mergeObject,
  hasKey,
  addToObject,
};
