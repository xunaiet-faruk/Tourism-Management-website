import axios from "axios";

export const axiosPublice =axios.create({
    baseURL: "http://localhost:5000"
})

const Useaxios = () => {
    return axiosPublice;
};

export default Useaxios;