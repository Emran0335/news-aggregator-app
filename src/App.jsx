import { useEffect, useState } from "react";
import { getNewsFromNewsAPI } from "./hooks/getNewsFromNewsAPI";
import { icons } from "./assets/Icons.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import NewsPage from "./pages/NewsPage.jsx";
import Navbar from "./components/Navbar.jsx";
console.log(icons);
function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewsFromNewsAPI()
      .then((res) => setArticles(res?.data?.articles))
      .catch((error) => console.error(error));
    return () => setLoading(false);
  }, []);

  console.log(loading);

  if (loading) {
    return (
      <div className="h-screen w-full overflow-y-auto bg-[#121212] text-white">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <span>{icons.loading}</span>
          <h1 className="text-3xl text-center mt-8 font-semibold">
            Please wait ....{" "}
          </h1>
          <h1 className="text-xl text-center mt-4">
            Refresh the page if it takes too long time to load!
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col bg-opacity-95">
      <Navbar />
      <div className="w-full h-full flex overflow-auto">
        <main className="overflow-y-auto h-full w-full">
          <NewsPage articles={articles} />
        </main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
