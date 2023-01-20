const server = require("express")();

server.listen(3001, async () => { });

server.get("/test", async (_, response) => {
    response.json({ "response": "connection established hi from developer!" });
});