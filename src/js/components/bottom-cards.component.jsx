const cardHtml = (arts, i) => {
  return `<div class="cards border-bottom mb-2" >
  <div class="row g-0">
  <div class="card-header border-bottom-0 bg-white d-flex flex-row">
<!--  <div>-->
<!--    <img src="profile.jpg" class="mr-3 rounded-circle" alt="Profile picture" width="40" height="40">-->
<!--    </div>-->
  <div class="media-body">
      <h6 class="mt-3">${arts.source.name}</h6>
      <small><i>by</i> ${arts.author}</small>
  </div>
</div>
    
      <div class="card-body d-flex flex-sm-fill">
      <div class="col-md-8 ">
        <h4 class="card-title">${arts.title.toUpperCase()}</h4>
        <p class="card-text">${arts.description}</p>
        <p class="card-text"><small class="text-muted">${arts.publishedAt.slice(
          0,
          10
        ).split("-").reverse().join("-")}</small></p>
        </div>
        <div class="card-img col-md-4 ">
      <img src="${arts.urlToImage}" class="img-fluid" alt="${arts.source.name}'s article image">
    </div>
    </div> 
  </div>
</div>`;
};

export default cardHtml;
