import {
  getDoctorsFailure,
  getDoctorsStart,
  getDoctorsSuccess,
} from "../redux/slice/doctor.slice";
import axios from "./api";

const DoctorSerice = {
  async getDoctors(dispatch) {
    dispatch(getDoctorsStart());
    try {
      const { data } = await axios.get("/doctors");
      dispatch(getDoctorsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(getDoctorsFailure());
    }
  },
  async postDoctors(dispatch, config) {
    dispatch(getDoctorsStart());
    try {
      const { data } = await axios.post("/add-doctor", config);
      dispatch(getDoctorsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(getDoctorsFailure());
    }
  },
};

export default DoctorSerice;
