"use  strict";

import * as bootstrap from "bootstrap";

import apiKey from "../../apiKey";
import cardHtml from "./components/bottom-cards.component";
import sideCardlHtml from "./components/side-cards.componenr";

//Importing Elements from Html
const bottomCards = document.querySelector(".middle-card");
const rightCards = document.querySelector(".right-section");

//searchbar elements
const searchBar = document.querySelector(".form-control");
const submitBtn = document.querySelector(".btn-submit");

//side nav buttons
const home = document.querySelector(".home");
const business = document.querySelector(".business");
const sports = document.querySelector(".sports");
const technology = document.querySelector(".technology");
const health = document.querySelector(".health");
const entertainment = document.querySelector(".entertainment");

class App {
  apiKey = apiKey;
  article = [];
  searchArt = [];
  recentArticle = [];

  btn = [home, business, sports, technology, health, entertainment];

  constructor() {
    //RENDER PAGE
    this._renderArticlesHome();
    this._renderArticlesLatest();
    submitBtn.addEventListener("click", this._renderSearchResults.bind(this));

    //click events for side nav buttons
    home.addEventListener("click", this._renderArticlesHome.bind(this));
    business.addEventListener("click", this._renderBusinessArticles.bind(this));
    sports.addEventListener("click", this._renderSportsArticles.bind(this));
    technology.addEventListener(
      "click",
      this._renderTechnologyArticles.bind(this)
    );
    health.addEventListener("click", this._renderHealthArticles.bind(this));
    entertainment.addEventListener(
      "click",
      this._renderEntertainmentArticles.bind(this)
    );
  }

  _removeActiveClass() {
    this.btn.map((btn) => {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      }
      return;
    });
  }

  async _renderSearchResults() {
    this._removeActiveClass();
    const searchStr = searchBar.value;
    console.log(searchStr);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?q=${searchStr}&sortBy=relevancy&apiKey=${this.apiKey}`
      );
      const data = await response.json();
      this.searchArt = data.articles;

      this.searchArt.map((arts, i) => {
        bottomCards.insertAdjacentHTML("afterbegin", cardHtml(arts, i));
      });
    } catch (error) {
      alert(error);
    }
  }

  async _renderArticlesHome() {
    this._removeActiveClass();
    home.classList.add("active");

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${this.apiKey}`
      );
      const data = await response.json();
      this.article = data.articles.sort(() => Math.random() - 0.5);

      this.article.map((arts, i) => {
        bottomCards.insertAdjacentHTML("afterbegin", cardHtml(arts, i));
      });
    } catch (error) {
      alert(error);
    }
  }

  async _renderArticlesLatest(india) {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${india}&language=en&sortBy=publishedAt&apiKey=${this.apiKey}`
      );
      const data = await response.json();
      this.recentArticle = data.articles;

      this.recentArticle.map((arts, i) => {
        return rightCards.insertAdjacentHTML(
          "afterbegin",
          sideCardlHtml(arts, i)
        );
      });
    } catch (error) {
      alert(error);
    }
  }

  async _renderBusinessArticles() {
    this._removeActiveClass();
    business.classList.add("active");
    bottomCards.innerHTML = "";

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${this.apiKey}`
      );
      const data = await response.json();
      this.article = data.articles.sort(() => Math.random() - 0.5);

      return this.article.map((arts, i) => {
        bottomCards.insertAdjacentHTML("afterbegin", cardHtml(arts, i));
      });
    } catch (error) {
      alert(error);
    }
  }

  async _renderSportsArticles() {
    this._removeActiveClass();
    sports.classList.add("active");
    bottomCards.innerHTML = "";

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${this.apiKey}`
      );
      const data = await response.json();
      this.article = data.articles.sort(() => Math.random() - 0.5);

      return this.article.map((arts, i) => {
        bottomCards.insertAdjacentHTML("afterbegin", cardHtml(arts, i));
      });
    } catch (error) {
      alert(error);
    }
  }

  async _renderTechnologyArticles() {
    this._removeActiveClass();
    technology.classList.add("active");
    bottomCards.innerHTML = "";

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${this.apiKey}`
      );
      const data = await response.json();
      this.article = data.articles.sort(() => Math.random() - 0.5);

      return this.article.map((arts, i) => {
        bottomCards.insertAdjacentHTML("afterbegin", cardHtml(arts, i));
      });
    } catch (error) {
      alert(error);
    }
  }

  async _renderHealthArticles() {
    this._removeActiveClass();
    health.classList.add("active");
    bottomCards.innerHTML = "";

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${this.apiKey}`
      );
      const data = await response.json();
      this.article = data.articles.sort(() => Math.random() - 0.5);

      return this.article.map((arts, i) => {
        bottomCards.insertAdjacentHTML("afterbegin", cardHtml(arts, i));
      });
    } catch (error) {
      alert(error);
    }
  }

  async _renderEntertainmentArticles() {
    this._removeActiveClass();
    entertainment.classList.add("active");
    bottomCards.innerHTML = "";

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${this.apiKey}`
      );
      const data = await response.json();
      this.article = data.articles.sort(() => Math.random() - 0.5);

      return this.article.map((arts, i) => {
        bottomCards.insertAdjacentHTML("afterbegin", cardHtml(arts, i));
      });
    } catch (error) {
      alert(error);
    }
  }
}

const app = new App();

console.log(app);
