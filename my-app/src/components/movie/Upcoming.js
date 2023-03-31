import React, { useContext, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { ChangePage } from "../Controls/ChangePage";
import { MovieContext } from "../API/CustomAPI";

export const Upcoming = () => {
  const { state, getData } = useContext(MovieContext);
  const { id } = useParams();

  // console.log(upcomingNext);

  //use the Params for user url page num search
  useEffect(() => {
    getData(id ? id * 1 : 1, "upcoming");
    // eslint-disable-next-line
  }, []);

  //Create navigation, using NavLink for relative link, Outlet the data to page
  return (
    <div>
      <h2>Upcoming Movie Rating</h2>
      <ChangePage
        getData={getData}
        currentPage={state.upcomingPage}
        next={state.upcomingNext}
        pageType="upcoming"
      />

      {/* <Page state={movieContext.state} /> */}
      <Outlet />

      <ChangePage
        getData={getData}
        currentPage={state.upcomingPage}
        next={state.upcomingNext}
        pageType="upcoming"
      />
    </div>
  );
};

export default Upcoming;
