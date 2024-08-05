import { useContext } from "react";
import QuiscoConext from "../context/QuiscoProvider";

const useQuisco = () => {
    return useContext(QuiscoConext)
}

export default useQuisco

