import axios from "axios";
import { clearLoading, setLoading } from "../actions/appActions";
import { setNewsList } from "../actions/newsActions";


const API_KEY = "7df8731b556a4966b0412e084f455423";
const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;


export const getNews = async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios.get(url);
    dispatch(setNewsList(data.articles));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(clearLoading());
  }
};