import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchApiData } from "./utils/api";

function App() {
  const dispatch = useDispatch();
  const dataResponse = useSelector((state) => state.data);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(fetchApiData());
    }, 5000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  console.log(dataResponse);

  if (dataResponse?.data?.error) {
    return (
      <>
        <h1>
          {dataResponse.data.status_code == 401
            ? "Unauthorized user"
            : "An error occurred"}
        </h1>
      </>
    );
  }

  return (
    <div>
      {dataResponse?.loading && (
        <>
          <p>Loading...</p>
        </>
      )}
      {dataResponse?.data?.map((item) => {
        return (
          <ul key={item.id}>
            <li>{item.title}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
