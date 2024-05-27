import {
  getAcceptanceFailure,
  getAcceptanceStart,
  getAcceptanceSuccess,
} from "../redux/slice/acceptance.slice";
import axios from "./api";

const AcceptanceService = {
  async postAcceptance(dispatch, acceptance) {
    dispatch(getAcceptanceStart());
    try {
      const { data } = await axios.post("./post-acceptance", acceptance);
      dispatch(getAcceptanceSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(getAcceptanceFailure());
    }
  },
};

export default AcceptanceService;
