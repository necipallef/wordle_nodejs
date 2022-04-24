import dotenv from 'dotenv';
import {server} from "./src/server";

dotenv.config();

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Listening on port:${PORT}...`)
})
