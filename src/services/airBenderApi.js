
export default async function fetchCharacters(page, perPage){
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=${perPage}&page=${page}`);
  const characters = await res.json();
  return characters.map(({ name, photoUrl }) => {
    return {
      name,
      image: photoUrl
    };
  });
}
