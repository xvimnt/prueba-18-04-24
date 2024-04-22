const httpError = require("../helpers/handleError");
const likeModel = require("../models/likes");

const getItems = async (req, res) => {
  try {
    //GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=a84b7fc40f1d46dea43796bfef4f18b1
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${process.env.NEWS_API_KEY}&q=guatemala`
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    httpError(res, error);
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${process.env.NEWS_API_KEY}&id=${id}`
    );
    const data = await response.json();
    // get likes
    const likes = await likeModel.find({ article_id: id });
    data.results[0].likes = likes.length;

    // get user like
    const user_id = req.userData.id;
    const liked = await likeModel.findOne({ user_id, article_id: id });
    data.results[0].liked = liked ? true : false;

    // get recomended new based on the same category
    const category = data.results[0].category;
    const recommended = await fetch(
      `https://newsdata.io/api/1/news?apikey=${process.env.NEWS_API_KEY}&category=${category}&q=guatemala`
    );
    const recommendedData = await recommended.json();
    // remove the current article from recommended
    recommendedData.results = recommendedData.results.filter(
      (article) => article.article_id != id
    );
    // remove duplicates
    recommendedData.results = recommendedData.results.filter(
      (article, index, self) =>
        index ===
        self.findIndex(
          (t) =>
            t.title === article.title && t.description === article.description
        )
    );
    data.results[0].recommended = recommendedData.results;

    res.send(data);
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = {
  getItem,
  getItems,
};
