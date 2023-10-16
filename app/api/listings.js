import client from "./client";

const endpoint = "/listings";

//get all posted news from server

const getListings = () => client.get(endpoint);



const addListings = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("article", listing.article);
  data.append("publishedDate", new Date().toISOString());
  data.append("categoryId", listing.category.value);
  listing.images.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });
  if (listing.location)
    data.append("location", JSON.stringify(listing.location));
  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListings,
  getListings,
};
