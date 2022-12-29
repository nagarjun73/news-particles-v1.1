// import state.article from "../main";

const carouselHtml = (arts, i) => {
  return `
      <div class="carousel-item active" ">
      <img src="${arts.urlToImage}" class="d-block w-100" alt="first-slide${i}">
      <div class="carousel-caption d-none d-md-block">
      <h1>#Top headlines</h1>
        <h2 class="fw-3">${arts.title}</h2>
      </div>
    </div>`;
};

export default carouselHtml;
