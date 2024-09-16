const layotContainer = document.querySelector(".layout_container");
const loadMore = document.querySelector(".load_more");
const cards = document.querySelector(".cards");

let inp = document.querySelector(".checkbox");
let likes = document.querySelectorAll(".likes");

const nightMode = () => {
  document.body.classList.toggle("nightMode");
};

const enlargeImage = (image) => {
  const imageSrc = image.getAttribute("src");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const enlargedImage = document.createElement("img");
  enlargedImage.classList.add("image-enlarged");
  enlargedImage.setAttribute("src", imageSrc);

  overlay.appendChild(enlargedImage);
  document.body.appendChild(overlay);

  overlay.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });
};

const stringShort = (str) => {
  if (str.length > 230) {
    return str.substring(0, 130).concat("...");
  } else {
    str;
  }
};

const getJSON = () => {
  return fetch("data.json").then((res) => {
    if (!res.ok) {
      throw new Error(`Data not found ${res.status}`);
    }
    return res.json();
  });
};

let currentCards = 0;

const loadCards = () => {
  getJSON()
    .then((data) => {
      let html = "";
      let number = 0;
      for (let item of data) {
        if (number < 4) {
          html += `
          <div class="card">
            <img
              class="image"  onclick="enlargeImage(this)"
              src="${item.image}"
              alt=""
            />
            <p>
            ${stringShort(item.caption)}
            </p>
              <img
                class="profile_image"
                src="${item.profile_image}"
                alt=""
                width="40px"
            height="40px"
              />
              <div class="div">
              <h4>${item.name}</h4>
              <h6>${item.date}</h6>
              </div>
            <div class="icons">
              <div class="fb">
                <a href=""><img src="img/fb.png" width="25px" height="25px" alt=""/></a>
              </div>
              <div class="likes">
                <img src="img/heart.png" width="20px" alt="" />
                <p>${item.likes}</p>
              </div>
            </div>
          </div>`;
          currentCards++;
        }
        number++;
      }
      cards.insertAdjacentHTML("beforeend", html);
    })
    .catch((err) => {
      console.error(`Something went wrong ${err.status}`);
    });
};

loadCards();

const loadMoreCards = () => {
  let cards = document.querySelectorAll(".card").length;
  console.log(cards);
  getJSON()
    .then((data) => {
      let html = "";
      let number = 0;
      for (let item of data) {
        if (number >= cards && number < 4 + cards) {
          html += `
          <div class="card">
            <img
              class="image"
              onclick="enlargeImage(this)"
              src="${item.image}"
              alt=""
            />
            <p>
            ${stringShort(item.caption)}
            </p>
              <img
                class="profile_image"
                src="${item.profile_image}"
                alt=""
                width="40px"
                height="40px"
              />
              <div class="div">
              <h4>${item.name}</h4>
                <h6>${item.date}</h6>
              </div>
            <div class="icons">
              <div class="fb">
                <a href="${
                  item.source_link
                }s"><img src="img/fb.png" width="25px" height="25px" alt=""/></a>
              </div>
              <div class="likes">
                <img src="img/heart.png" width="20px" alt="" />
                <p>${item.likes}</p>
              </div>
            </div>
        </div>`;
          currentCards++;
        }
        number++;
      }

      let newCards = document.createElement("div");
      newCards.classList.add("cards");
      newCards.insertAdjacentHTML("beforeend", html);
      layotContainer.appendChild(newCards);

      if (currentCards >= data.length) {
        loadMore.style.display = "none";
      }
    })
    .catch((err) => {
      console.error(`Something went wrong ${err.status}`);
    });
};
