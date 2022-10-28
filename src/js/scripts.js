const btn = document.querySelector('button');
const champ = document.querySelector('p span'[0])

const COUNTRIES = [
  {
    country: 'CAT',
    details: {
      group: 'A',
      score: 1442.0,
      lastmotivation: ''
    }
  },
  {
    country: 'EQU',
    details: {
      group: 'A',
      score: 1463.7,
      lastmotivation: ''
    }
  },
  {
    country: 'HOL',
    details: {
      group: 'A',
      score: 1679.4,
      lastmotivation: ''
    }
  },
  {
    country: 'SEN',
    details: {
      group: 'A',
      score: 1584.6,
      lastmotivation: ''
    }
  },
  {
    country: 'EUA',
    details: {
      group: 'B',
      score: 1635.0,
      lastmotivation: ''
    }
  },
  {
    country: 'ING',
    details: {
      group: 'B',
      score: 1737.5,
      lastmotivation: ''
    }
  },
  {
    country: 'IRA',
    details: {
      group: 'B',
      score: 1558.6,
      lastmotivation: ''
    }
  },
  {
    country: 'GAL',
    details: {
      group: 'B',
      score: 1582.1,
      lastmotivation: ''
    }
  },
  {
    country: 'ARG',
    details: {
      group: 'C',
      score: 1770.7,
      lastmotivation: ''
    }
  },
  {
    country: 'ARA',
    details: {
      group: 'C',
      score: 1435.7,
      lastmotivation: ''
    }
  },
  {
    country: 'MEX',
    details: {
      group: 'C',
      score: 1649.6,
      lastmotivation: ''
    }
  },
  {
    country: 'POL',
    details: {
      group: 'C',
      score: 1546.2,
      lastmotivation: ''
    }
  },
  {
    country: 'AUS',
    details: {
      group: 'D',
      score: 1483.7,
      lastmotivation: ''
    }
  },
  {
    country: 'DIN',
    details: {
      group: 'D',
      score: 1665.5,
      lastmotivation: ''
    }
  },
  {
    country: 'FRA',
    details: {
      group: 'D',
      score: 1764.9,
      lastmotivation: ''
    }
  },
  {
    country: 'TUN',
    details: {
      group: 'D',
      score: 1507.9,
      lastmotivation: ''
    }
  },
  {
    country: 'ALE',
    details: {
      group: 'E',
      score: 1659.0,
      lastmotivation: ''
    }
  },
  {
    country: 'COS',
    details: {
      group: 'E',
      score: 1500.1,
      lastmotivation: ''
    }
  },
  {
    country: 'ESP',
    details: {
      group: 'E',
      score: 1716.9,
      lastmotivation: ''
    }
  },
  {
    country: 'JAP',
    details: {
      group: 'E',
      score: 1554.7,
      lastmotivation: ''
    }
  },
  {
    country: 'BEL',
    details: {
      group: 'F',
      score: 1821.9,
      lastmotivation: ''
    }
  },
  {
    country: 'CAN',
    details: {
      group: 'F',
      score: 1473.8,
      lastmotivation: ''
    }
  },
  {
    country: 'CRO',
    details: {
      group: 'F',
      score: 1632.2,
      lastmotivation: ''
    }
  },
  {
    country: 'MAR',
    details: {
      group: 'F',
      score: 1558.4,
      lastmotivation: ''
    }
  },
  {
    country: 'BRA',
    details: {
      group: 'G',
      score: 1837.6,
      lastmotivation: ''
    }
  },
  {
    country: 'CAM',
    details: {
      group: 'G',
      score: 1485.0,
      lastmotivation: ''
    }
  },
  {
    country: 'SUI',
    details: {
      group: 'G',
      score: 1621.4,
      lastmotivation: ''
    }
  },
  {
    country: 'SER',
    details: {
      group: 'G',
      score: 1549.5,
      lastmotivation: ''
    }
  },
  {
    country: 'COR',
    details: {
      group: 'H',
      score: 1526.0,
      lastmotivation: ''
    }
  },
  {
    country: 'GAN',
    details: {
      group: 'H',
      score: 1393.5,
      lastmotivation: ''
    }
  },
  {
    country: 'POR',
    details: {
      group: 'H',
      score: 1678.7,
      lastmotivation: ''
    }
  },
  {
    country: 'URU',
    details: {
      group: 'H',
      score: 1641.0,
      lastmotivation: ''
    }
  }
];

class Team {
  constructor(COUNTRIES) {
    this.COUNTRIES = COUNTRIES

    this.COUNTRY_NAME = COUNTRIES.country
    this.COUNTRY_GROUP = COUNTRIES.group
    this.COUNTRY_SCORE = COUNTRIES.score
  }

  // This is where you get the top score within the countries
  getBestScore() {
    const COUNTRIES_SCORES = []

    this.COUNTRIES.forEach(country => {
      COUNTRIES_SCORES.push(country.details.score)
    })

    const BEST_SCORE = COUNTRIES_SCORES.sort().reverse()[0]
    return BEST_SCORE;
  }

  // This is where you get each one of the scores and mix it with random motivation, so not only the score counts.
  getMotivation(COUNTRIES) {
    const BEST_SCORE = this.getBestScore(COUNTRIES)

    for (let i = 0; i < COUNTRIES.length; i++) {
      const min = 70
      const max = (COUNTRIES[i].details.score * 100) / BEST_SCORE

      COUNTRIES[i].details.lastmotivation = Number(
        Math.floor(Math.random() * (max - min + 1)) + min
      )
    }
  }
};

const country = new Team(COUNTRIES);

function predictGroupStage (COUNTRIES, group) {
  country.getMotivation(COUNTRIES)

  const groupList = [];

  COUNTRIES.forEach((team) => {
    if (team.details.group === group) {
      groupList.push([team.country, team.details.lastmotivation]);
    }
  })

  groupList.sort(function(a, b) {
    return a[1]-b[1]
  }).reverse();
  
  return groupList;
}

const groupList_A = predictGroupStage(COUNTRIES, "A");
const groupList_B = predictGroupStage(COUNTRIES, "B");
const groupList_C = predictGroupStage(COUNTRIES, "C");
const groupList_D = predictGroupStage(COUNTRIES, "D");
const groupList_E = predictGroupStage(COUNTRIES, "E");
const groupList_F = predictGroupStage(COUNTRIES, "F");
const groupList_G = predictGroupStage(COUNTRIES, "G");
const groupList_H = predictGroupStage(COUNTRIES, "H");

function predictMatch(a, b) {
  country.getMotivation(COUNTRIES)

  if (a[1] > b[1]) {
    return a;
  } else {
    return b;
  }
}

const quarter1 = predictMatch(groupList_A[0], groupList_B[1]);
const quarter2 = predictMatch(groupList_C[0], groupList_D[1]);
const quarter3 = predictMatch(groupList_E[0], groupList_F[1]);
const quarter4 = predictMatch(groupList_G[0], groupList_H[1]);
const quarter5 = predictMatch(groupList_B[0], groupList_A[1]);
const quarter6 = predictMatch(groupList_D[0], groupList_C[1]);
const quarter7 = predictMatch(groupList_F[0], groupList_E[1]);
const quarter8 = predictMatch(groupList_H[0], groupList_G[1]);

const semi1 = predictMatch(quarter1, quarter2)
const semi2 = predictMatch(quarter3, quarter4)
const semi3 = predictMatch(quarter5, quarter6)
const semi4 = predictMatch(quarter7, quarter8)

const winnerContenders = [];
const thirdplaceContenders = [];

if (semi1[1] > semi2[1] ? winnerContenders.push(semi1) : thirdplaceContenders.push(semi1));
if (semi2[1] > semi1[1] ? winnerContenders.push(semi2) : thirdplaceContenders.push(semi2));
if (semi3[1] > semi4[1] ? winnerContenders.push(semi3) : thirdplaceContenders.push(semi3));
if (semi4[1] > semi3[1] ? winnerContenders.push(semi4) : thirdplaceContenders.push(semi4));


const champion = winnerContenders.sort(function(a, b) {
  return a[1]-b[1]
}).reverse()[0];


const secondplace = winnerContenders.sort(function(a, b) {
  return a[1]-b[1]
}).reverse()[1];

const thirdplace = predictMatch(thirdplaceContenders[0], thirdplaceContenders[1]);

// EVENT

btn.addEventListener('click', (e) => {

  country.getBestScore(COUNTRIES)
  console.log('OITAVAS :\n', groupList_A, groupList_B, groupList_C, groupList_D, groupList_E, groupList_F, groupList_G, groupList_H)
  console.log('QUARTAS: \n', quarter1, quarter2, quarter3, quarter4, quarter5, quarter6, quarter7, quarter8);
  console.log('SEMI: \n', semi1, semi2, semi3, semi4);
  console.log('CHAMPIONSHIP CONTENDERS:\n', winnerContenders);
  console.log('THIRD PLACE CONTENDERS:\n', thirdplaceContenders);
  console.log('CHAMPION:\n', champion);
  console.log('SECOND PLACE:\n', secondplace);
  console.log('THIRD PLACE:\n', thirdplace)

  champ.innerText += champion[0];
})

