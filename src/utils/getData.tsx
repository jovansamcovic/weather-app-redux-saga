import axios, { AxiosError, AxiosResponse } from "axios";

const getData = async (APIEndPointURL: string): Promise<AxiosResponse | string> => {
  try {
    const responsive = await axios.get(APIEndPointURL);

    return responsive;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return "An unknow error occurred!";
    }
  }
}

export default getData;