import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

const App = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await api.get('/api/products?search=' + search);
        setProducts(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <h1 className="text-center text-4xl m-auto">Something went wrong</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="bg-gray-300 border shadow-2xl p-4">
        <h1 className="text-4xl font-semibold">Axios & React Query Practice</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="text-2xl font-medium mt-4 flex items-center gap-2">
          <span>NO. of products available:</span>
          <span>{loading ? (<LoaderCircle className="animate-spin" />) : products.length}</span>
        </div>
      </div>
    </div>
  );
};

export default App;

// const useCustomQueryHook = (urlPath, search) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setError(false);
//         const response = await api.get(urlPath);
//         setProducts(response.data);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [urlPath, search]);

//   return { products, error, loading };
// };
