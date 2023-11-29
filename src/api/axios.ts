import axios from "axios";

import { MOCKED_BASE_URL } from "./constants.ts";

export default axios.create({
    baseURL: MOCKED_BASE_URL,
});
