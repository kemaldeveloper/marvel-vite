import { useHttp } from "../hooks/http.hook.js";

const useMarvelService = () => {
  const { loading, error, request, clearError } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=6a04fa0bfca44421c5ddbd5202a78c94";
  const _baseOffset = 210;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async id => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const getAllComics = async (offset = 0) => {
    const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformComics);
  };

  const getComics = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComics(res.data.results[0]);
  };

  const _transformCharacter = char => {
    return {
      id: char.id,
      name: char.name,
      description: char.description,
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items
    };
  };

  const _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description || "There is no comics yet!",
      pageCount: comics.pageCount ? `${comics.pageCount} р.` : "No information about the number of pages",
      thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
      language: comics.textObjects[0]?.language || "en-us",
      // optional chaining operator
      price: comics.prices[0].price ? `${comics.prices[0].price}$}` : "not available"
    };
  };

  return { loading, error, getAllCharacters, getCharacter, getAllComics, getComics, clearError };
};

export default useMarvelService;
