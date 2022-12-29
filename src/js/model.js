import { async } from "regenerator-runtime";

//CALLING API from NewsAPI

const state = {
  article: {},
};

const loadArticles = async function () {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&sortBy=popularity&apiKey=cbe9fa26f6424df5b56d2a45a19c3e9c`
    );
    const data = await response.json();

    const { articles } = data.articles;
    state.article = {
      author: articles.author,
      content: articles.content,
      description: articles.description,
      title: articles.title,
    };

    console.log(state.article);
  } catch (error) {
    alert(error);
  }
};
