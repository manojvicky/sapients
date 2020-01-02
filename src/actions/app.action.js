export default function hitDataApi(url) {
    return function(dispatch) {
      dispatch({ type: "LOADING", loading: true });
      fetch(url)
        .then(res => res.json())
        .then(data => {
          dispatch({ type: "DATA", data: data });
          dispatch({ type: "LOADING", loading: false });
        })
        .catch(error => {
            console.log("error", error);
            dispatch({ type: "LOADING", loading: false });
            dispatch({ type: "ERROR", error });
        });
    };
  }