import "./App.scss";
import Routing from "./containers/Routing/Routing";
import ArticleCardList from "./containers/ArticleCardList/ArticleCardList";
import articleInfo from "./assets/data/dummyArticleCardInformation";

const App = () => {
  return (
    <div className="App">
      <Routing />
      <ArticleCardList articleInfo={articleInfo} />
    </div>
  );
};

export default App;

