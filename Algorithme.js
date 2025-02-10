function findArtistIndexDummy(artists, name) {
  console.log("Début test Dummy");
    for (let i = 0; i < artists.length; i++) { // Parcourir tous les artistes
      if (artists[i].name === name) { // Si le nom de l'artiste correspond
        return artists[i].id; // Retourner l'identifiant de l'artiste
      }
    }
    return -1;
}

function findArtistIndexOptimized(artistsMap, name) {
  console.log("Début test Optimized");
  if (artistsMap[name]) { // Si l'artiste existe dans le dictionnaire
    return artistsMap[name]; // Retourner l'identifiant de l'artiste
  }
  return -1;
}

// Générer une grande base de données d'artistes
console.log("Début de la création du tableau d'artistes");
const artistes = []; // Utiliser un tableau pour stocker les artistes
const artistesMap = {}; // Utiliser un dictionnaire pour stocker les artistes par nom
for (let i = 1; i <= 5000000; i++) {
  const artist = { id: i.toString(), name: `Artiste${i}` }; // Créer un artiste
  artistes.push(artist); // Ajouter l'artiste au tableau
  artistesMap[artist.name] = artist.id; // Ajouter l'artiste au dictionnaire
}
console.log("Fin de la création du tableau d'artistes");



// Ajouter 'Van Gogh' à la base de données
const vanGogh = { id: '5000001', name: 'Van Gogh' };
artistes.push(vanGogh);
artistesMap[vanGogh.name] = vanGogh.id;

// Mesurer le temps d'exécution pour 'Van Gogh'
console.time('findArtistIndexDummy Van Gogh');
console.log(findArtistIndexDummy(artistes, 'Van Gogh')); // Devrait retourner '10000001'
console.timeEnd('findArtistIndexDummy Van Gogh');

// Mesurer le temps d'exécution pour 'Van Gogh'
console.time('findArtistIndexOptimized Van Gogh');
console.log(findArtistIndexOptimized(artistesMap, 'Van Gogh')); // Devrait retourner '10000001'
console.timeEnd('findArtistIndexOptimized Van Gogh');