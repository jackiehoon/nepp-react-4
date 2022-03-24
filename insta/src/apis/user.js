import instance from ".";

export const postUser = async (data) => {
  try {
    const result = await instance({
      method: "POST",
      url: "/users",
      data,
    });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const postLoginToken = async (data) => {
  try {
    const result = await instance({
      method: "POST",
      url: "/users/token",
      data,
    });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
