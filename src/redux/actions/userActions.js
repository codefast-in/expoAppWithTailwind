import api from "../../utils/axiosConfig";

export const onLogin = () => async (dispatch) => {
  try {
    const {data} = await api.post("/login", {
      email: "XXXXXXXXXXXXXX",
      password: "123456",
    });
  } catch (error) {
    console.log({...error});
  }
};
export const onLogout = () => async (dispatch) => {
  try {
    const {data} = await api.post("/logout");
  } catch (error) {
    console.log({...error});
  }
};
