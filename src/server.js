import http from "http";

import { app } from "./app.js";

const port = 3333;
const server = http.createServer(app);
server.listen(port);

export { server };
