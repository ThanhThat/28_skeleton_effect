const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

(() => {
  const postImg = $(".post__img");
  const postTitle = $(".post-body__title");
  const postContent = $(".post-body__content");
  const btnReadMore = $(`.post-body__read-more`);

  setTimeout(() => {
    postImg.innerHTML = `<img src="./assets/images/skeleton_image.avif" alt="skeleton" />`;
    postImg.classList.remove("loading");

    postTitle.innerHTML = `Thanh That`;
    postTitle.classList.remove("loading");

    postContent.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta qui
    repudiandae, maxime optio voluptatem eius eveniet officiis`;
    postContent.classList.remove("loading");

    btnReadMore.innerHTML = `Read more`;
    btnReadMore.classList.remove("loading");
  }, 4000);
})();
