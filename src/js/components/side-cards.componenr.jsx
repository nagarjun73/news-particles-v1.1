const sideCardlHtml = (arts, i) => {
  return `<div class="cards p-3 border-bottom">
              <h6 class="card-text">${arts.title}</h6>
      <p class="card-text">By <i>${arts.author}</i></p>
        </div>`;
};

export default sideCardlHtml;
