import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = title;  // ✅ Updates the document title
  }, [title]);
};

export default useTitle;
