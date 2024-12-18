import { Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const isAppLoading = useSelector((state) => state.loading.value);

  if (isAppLoading) {
    return (
      <h1>Loading Please wait...</h1>
    );
  }

  return (
    <Routes>

    </Routes>
  );
}

export default App;