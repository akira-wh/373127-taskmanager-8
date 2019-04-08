/**
 * Получение рандомного целого числа от MIN до MAX (обе границы участвуют).
 *
 * @function getRandomInteger
 * @param {number} min — минимально допустимое число
 * @param {number} max — максимально допустимое число
 * @return {number} — рандомное целое число
 */
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export {getRandomInteger};
