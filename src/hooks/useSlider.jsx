import { useQuery } from "react-query";
import axios from "axios";
const useSlider = () => {
  const { data: slider } = useQuery("slider", async () => {
    const response = await axios.get("https://combat-academy-server.vercel.app/topslider");
    return response.data;
  });

  return [slider];
};

export default useSlider;
