import useFetch from "../hook/useFetch";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Background from "../components/Background";

const Category = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    "https://category-data.vercel.app/categories"
  );
  console.log("checking data on cte..", data);

  const handleCategoryClick = (category) => {
    navigate(`/books/${category}`);
  };
  console.log("checkding handlecategrory fucti", handleCategoryClick);

  return (
    <div>
      <br />
      <br />

      <Background />
      <br />
      <br />

      {loading && (
        <h4 className="container py-3 ms-auto">
          Loading categories...📙📘📗✨
        </h4>
      )}
      {error && <p>An error occured while fetching books.</p>}
      {data && data.length > 0 ? (
        <div className="row">
          {data?.map((cat) => (
            <div
              key={cat._id}
              onClick={() => handleCategoryClick(cat.category)}
              className="col-md-4 bt-sm-3 mb-5"
            >
              <div class="container">
                <div className="card">
                  <img
                    src={cat.image}
                    alt={cat.category}
                    className=" card-img-top img-fluid"
                  />
                  <div className="card-body">
                    <h4 className=" card-title text-center">
                      📔{cat.category}📖
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}

      <div className="container col-md-4">
        <div className="card">
          <Link to="/books">
            <img
              src="https://res.cloudinary.com/dltfnhclh/image/upload/v1759136328/Non_Fiction_Books_9_icqebp.png"
              alt="All"
              className=" card-img-top img-fluid"
            />
          </Link>
          <div className="card-body">
            <h4 className="card-title text-center">📔All Books...📖</h4>
          </div>
        </div>
      </div>
      <div></div>
      <br />
      <Footer />
    </div>
  );
};

export default Category;
