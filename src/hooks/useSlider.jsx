import { useQuery } from "react-query";
import axios from "axios";
const useSlider = () => {
  const { data: slider } = useQuery("slider", async () => {
    const response = await axios.get("http://localhost:5000/topslider");
    return response.data;
  });

  return [slider];
};

export default useSlider;
