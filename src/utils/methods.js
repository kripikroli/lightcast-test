/**
 *
 * @param {*} startingYear
 * @param {*} entity
 * @returns result - array or undefined
 */
export function generateOccupationLineChartData(startingYear, entity) {
  let result = [];
  let year = startingYear;
  let trendPercentage = 0;

  console.log(entity);

  entity &&
    entity.map((element, index) => {
      if (!index) {
        result.push({ label: year, value: 0 });
      } else {
        const diffPercentage = (
          ((element - entity[index - 1]) / element) *
          100
        ).toFixed(1);
        year += 1;
        trendPercentage += Number(diffPercentage);
        result.push({ label: year, value: trendPercentage });
      }
    });

  return result;
}

/**
 *
 * @param {*} regionalTotal
 * @param {*} nationalAverage
 * @returns result - number
 */
export function computeNationalAveragePercentage(
  regionalTotal,
  nationalAverage
) {
  let result = 0;

  result = 100 * (regionalTotal / nationalAverage);

  return result.toFixed();
}
