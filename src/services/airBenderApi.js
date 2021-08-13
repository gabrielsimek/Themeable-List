
export default async function fetchCharacters(){
  const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
  const characters = await res.json();
  return characters.map(({ name, photoUrl }) => {
    return {
      name,
      image: photoUrl
    };
  });
}
