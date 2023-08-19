import axios from "axios";

export async function getPositionData() {
    const response = await axios.get("https://ipapi.co/json");
    const data = response.data;
    return data;
}