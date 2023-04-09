const barHeight = 20;
const barMargin = 4; // vertical spacing between
const barTotal = barHeight + barMargin;
const players = [
  {name: 'Mark', score: 20},
  {name: 'Tami', score: 40},
  {name: 'Amanda', score: 50},
  {name: 'Jeremy', score: 70}
];
const svgWidth = 400;
const svgHeight = 300;

// Get the highest score.
const highScore = d3.max(players, player => player.score);

// Create a linear scale that maps values from zero to the maximum score
// to values from zero to the width of the SVG.
const widthScale = d3.scaleLinear().domain([0, highScore]).range([0, svgWidth]);

// Create an SVG element.
const svg = d3
  .select('body')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

// Create a selection containing one SVG group for each data value
// that are translated in the y-direction so they are visually separated.
const barGroups = svg
  .selectAll('g')
  .data(players)
  .enter()
  .append('g')
  .attr('transform', (_, i) => `translate(0, ${i * barTotal})`);

// Create a rect for each data value.
barGroups
  .append('rect')
  .attr('width', player => widthScale(player.score))
  .attr('height', barHeight);

// Create text for each data value that displays a player name.
barGroups
  .append('text')
  .text(player => player.name)
  .attr('x', 6) // at beginning of bar
  .attr('y', barTotal / 2 + 3); // centered vertically

// Create text for each data value that displays a player score.
barGroups
  .append('text')
  .text(player => player.score)
  .attr('x', player => widthScale(player.score) - 24) // at end of bar
  .attr('y', barTotal / 2 + 3); // centered vertically