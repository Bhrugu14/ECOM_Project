import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";
import "./App.css";
import { usePosts } from "./store/post";

function App() {
  const [count, setCount] = useState(0);
  const { status, data, error, isFetching } = usePosts();
  console.log("QueryLog", { status, data, error, isFetching });

  return (
    <div>
      <div>List of Posts</div>
      {status === "loading" && <div>LOADING....</div>}
      <div className="flex w-full flex-wrap">
        {status === "success" &&
          data.map(
            (
              i: {
                userId:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
                id:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
                completed:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
              },
              k: string
            ) => {
              return (
                <div
                  key={"data" + k}
                  className="flex flex-col h-56 w-1/5 border-red-400 border justify-center"
                >
                  <label>userId: {i.userId}</label>
                  <label>id: {i.id}</label>
                  <label>title: {i.title}</label>
                  <label>completed: {i.completed}</label>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
}

export default App;
