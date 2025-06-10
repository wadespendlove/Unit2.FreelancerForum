/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function getRandomPriceInRange(range) {
  const { min, max } = range;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomPrice = getRandomPriceInRange(PRICE_RANGE);

const randomFreelancerObject = () => {
  console.log(Math.floor(Math.random() * NAMES.length));
};

createOneFreelancer = (names, occupations, price_ranges) => {
  let freelancer = [];
  const randomNamesIndex = Math.floor(Math.random() * NAMES.length);
  const randomOccupationIndex = Math.floor(Math.random() * OCCUPATIONS.length);
  const randomPrice = getRandomPriceInRange(PRICE_RANGE);
  freelancer.push({
    name: names[randomNamesIndex],
    occupation: occupations[randomOccupationIndex],
    price: randomPrice,
  });
  console.log(freelancer);
};

createOneFreelancer(NAMES, OCCUPATIONS, randomPrice);
let state = [];
function create100Freelancers(names, occupations, price_range) {
  for (let i = 0; i < NUM_FREELANCERS; i++) {
    const randomNamesIndex = Math.floor(Math.random() * NAMES.length);
    const randomOccupationIndex = Math.floor(
      Math.random() * OCCUPATIONS.length
    );
    const randomPrice = getRandomPriceInRange(PRICE_RANGE);
    //const randomPriceIndex = Math.floor(Math.random() * PRICE_RANGE.length);
    state.push({
      name: names[randomNamesIndex],
      occupation: occupations[randomOccupationIndex],
      price: randomPrice,
    });
  }
  console.log(state);
}

create100Freelancers(NAMES, OCCUPATIONS, randomPrice);

const getAverageRate = (freelancers) => {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  return total / freelancers.length;
};

console.log(getAverageRate(state));
