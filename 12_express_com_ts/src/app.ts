// 1 - iniciando projeto
// console.log("Express + TS!!!");

// 2 - init express
import express from "express"

const app = express();


// 3 - rota com POST
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello Express!");
});


// 3 - rota com POST
app.post("/api/product", (req, res) => {

    console.log(req.body)

    res.send("Produto adicionado !");
});

app.listen(3000, () => {
    console.log ("Aplicação de TS + Express funcionando !");
});