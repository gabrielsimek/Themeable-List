
export async function fetchCharacters(page, perPage){
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=${perPage}&page=${page}`);
  const characters = await res.json();
  return characters.map(({ name, photoUrl }) => {
    return {
      name,
      image: photoUrl
    };
  });
}

export async function fetchByName(searchTerm){
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${searchTerm}`);
  const matchingCharacters = await res.json();
  return matchingCharacters.map(({ name, photoUrl }) => {
    return {
      name,
      image: photoUrl
    };
  });
}

