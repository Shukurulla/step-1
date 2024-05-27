import {
  getSpecialityFailure,
  getSpecialityStart,
  getSpecialitySuccess,
} from "../redux/slice/speciality.slice";
import axios from "./api";

const SpecialityService = {
  async getSpecialities(dispatch) {
    dispatch(getSpecialityStart());
    try {
      const { data } = await axios("/specialities");
      dispatch(getSpecialitySuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(getSpecialityFailure());
    }
  },
};

export default SpecialityService;
