// 1 - iniciando projeto
// console.log("Express + TS!!!");

// 2 - init express
import express, {Request, Response} from "express"

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

// 4 - rota para todos os verbos All


app.all("/api/product/check", (req, res) => {
    // req.method = VERBO HTTP
    if (req.method === "POST") {
        res.send("Inseriu algum registro");
    } else if (req.method === "GET") {
        res.send("Leu algum registro!");
    } else {
        res.send("Não podemos realizar esta operação");
    }
});

// 5 - interface do express
app.get("/api/interfaces", (req: Request, res: Response) => {

    res.send("Utilizando as interfaces");
});

// 6 - enviando json

app.get("/api/json", (req: Request, res: Response) => {

     res.json({
        name: "shirt",
        price: 30.00,
        color: "blue",
        sizes: ["P", "M", "G"],
    });
});

// 7 - router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {

    console.log(req.params);
    const id = req.params.id
    if(id === "1") {
        const product = {
            id: 1,
            name: "boné",
            price: 10,
        };

        res.json(product);

    } else {
        res.send("Produto não encontrado!");
    }
    res.send("Produto não encontrado");
});

app.listen(3000, () => {
    console.log ("Aplicação de TS + Express funcionando !");
});