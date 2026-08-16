/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react"

export const PostDataContext = createContext();
const ThemeContext = (props) => {
  return (
    <PostDataContext.Provider value="Baad Mein Bataunga">
      {props.children}
    </PostDataContext.Provider>
  )
};

export default ThemeContext;
