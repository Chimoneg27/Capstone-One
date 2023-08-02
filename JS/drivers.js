const driverCards = [
  {
    racerName: 'Lewis Hamilton',
    shortIntro: '7 time world champion.',
    line: 'hr',
    shortDesc: 'Lewis Hamilton is a British racing driver widely regarded as one of the greatest in Formula 1 history.',
    img: 'images/hamilton.jpg',
  },
  {
    racerName: 'Lando Norris',
    shortIntro: 'Mclaren Driver.',
    line: 'hr',
    shortDesc: 'Lando Norris is a talented Formula 1 driver known for his impressive skills, youthful enthusiasm, and charismatic personality.',
    img: 'images/norris.jpg',
  },
  {
    racerName: 'Charles Leclerc',
    shortIntro: 'Ferrari Driver.',
    line: 'hr',
    shortDesc: 'Charles Leclerc is a skilled Formula 1 driver who has exceptional racecraft making him a formidable competitor on the track.',
    img: 'images/leclerc.jpg',
  },
  {
    racerName: 'Sergio Perez',
    shortIntro: 'Redbull Racing Driver.',
    line: 'hr',
    shortDesc: 'Sergio Perez is a tenacious Formula 1 driver renowned for his strategic prowess, and remarkable ability to manage tire degradation.',
    img: 'images/perez.jpg',
  },
  {
    racerName: 'Daniel Riccardo',
    shortIntro: 'Alphatari Redbull Driver.',
    line: 'hr',
    shortDesc: 'Daniel Ricciardo is an electrifying Formula 1 driver known for his vibrant personality, and aggressive overtakes.',
    img: 'images/ricardo.jpg',
  },
  {
    racerName: 'Geroge Russell',
    shortIntro: 'Mercedes Petronas Driver.',
    line: 'hr',
    shortDesc: 'A promising young Formula 1 driver recognized for his exceptional talent, and ability to deliver strong performances.',
    img: 'images/russell.jpg',
  },
];

const cardsContainer = document.querySelector('#card-container');

driverCards.forEach((card) => {
  const cardElement = document.createElement('div');
  cardElement.className = 'racer';

  cardElement.innerHTML = `
              <img src="${card.img}" alt="sir-lewis-hamilton">
              <div class="about-driver">
                  <h3>${card.racerName}</h3>
                  <h4>${card.shortIntro}</h4>
  
                  <${card.line}>
  
                  <p>
                      ${card.shortDesc}
                  </p>
              </div>
          `;

  cardsContainer.appendChild(cardElement);
});
