// 1 - iniciando projeto
// console.log("Express + TS!!!");

// 2 - init express
import express, {NextFunction, Request, Response} from "express"

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

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path);
    next();
}


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

// 8 - rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
    console.log(req.params);

    const productId = req.params.id;
    const reviewId = req.params.id;

    res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});


// 9 - router handler
function getUser(req: Request, res: Response) {
    console.log(`Resgatando o usuario com id: ${req.params.id}`)

    res.send("O usuario foi encontrado !");
}

app.get("/api/user/:id", getUser);


// 10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
    if(req.params.id === "1") {
        console.log("pode seguir!");
    next();
 } else {
    console.log("Acesso restrito!");
}
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
    res.json({ msg: "Bem-vindo a área administrativa!"});
});

// 12 - req e res com generics
app.get("/api/user/:id/details/:name", (
    req: Request<{ id: string; name: string }>, 
    res: Response<{status: boolean}>
) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);


    res.json({ status: true });
});


// 13 - tratando erros
app.get("/api/error", (req: Request, res: Response) => {


    try {
        // a nossa lógica
        throw new Error("Algo deu errado!")
    } catch (e: any) {

        res.status(500).json({msg: e.message})
    }

})



app.listen(3000, () => {
    console.log ("Aplicação de TS + Express funcionando !");
});