const artists = [];
const stages = [];


// Générer 100000 artistes
for (let i = 0; i < 300000; i++) {
  artists.push({
    id: `artist${i}`,
    name: `Artist ${i}`,
    genre: `Genre ${i % 10}`, // 10 genres différents
    stage: ''
  });
}

// Générer 1000 scènes
for (let i = 0; i < 3000; i++) {
  stages.push({
    id: `stage${i}`,
    name: `Stage ${i}`,
    genres: [`Genre ${i}`] // Chaque scène a un genre unique
  });
}

function assignStagesDummy(artists, stages) {
  for (let stage of stages) {
    for (let artist of artists) {
      if (stage.genres.includes(artist.genre)) {
        artist.stage = stage.id;
        break;
      }
    }
  }
}

function assignStagesOptimized(artists, stages) {
  const genreToStageMap = {}; // Créer une map des genres aux scènes

  // Créer une map des genres aux scènes
  for (let stage of stages) { // Parcourir toutes les scènes
    for (let genre of stage.genres) { // Parcourir tous les genres de la scène
      genreToStageMap[genre] = stage.id; // Assigner la scène au genre
    }
  }

  // Assigner les scènes aux artistes en utilisant la map
  for (let artist of artists) { // Parcourir tous les artistes
    if (genreToStageMap[artist.genre]) { // Si le genre de l'artiste a une scène associée
      artist.stage = genreToStageMap[artist.genre]; // Assigner la scène à l'artiste
    }
  }
}

// Mesurer le temps d'exécution
console.time('assignStagesDummy');
assignStagesDummy(artists, stages);
console.timeEnd('assignStagesDummy');

// Mesurer le temps d'exécution
console.time('assignStagesOptimized');
assignStagesOptimized(artists, stages);
console.timeEnd('assignStagesOptimized');



// Affichage des résultats pour vérification
//console.log(artists.slice(0, 10)); // Afficher les 10 premiers artistes pour vérification