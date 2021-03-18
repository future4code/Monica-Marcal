import express, {Express, Request, Response} from'express';
import cors from 'cors';
import { countries, country } from "./countries";


const app: Express = express();
app.use(express.json());
app.use((cors));


//Mapeando do arquivo importado countries com a função .map
//criando um endpoint que retorna um id e um nome
app.get('/countries/all', (req:Request, res:Response) => {
    const mappedCountries = countries.map((country: country) =>{
        return {id: country.id, name: country.name}
    })
    res.status(201).send(mappedCountries);
});


app.get("/countries/search", (req:Request, res:Response) => {
    let result: country[] = countries;
    try{
        if(!req.query.name && req.query.capital && ! req.query.continent){
            throw new Error("invalid parameters")
        }
        if(req.query.name){
            result = result.filter(
                country => country.name.includes(req.query.name as string)
            )
        }
        if (req.query.capital){
            result =  result.filter(
                country => country.capital.includes(req.query.capital as string)
            )
        }
        if(req.query.continent){
            result = result.filter(
                country => country.continent.includes(req.query.continent as string)
            )
        }
    }catch (error) {
      res.status(400).send(error.message);
   }

   res.status(200).send(result);

});

app.get("/countries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
       country => country.id === Number(req.params.id)
    );
 
    if (result) {
       res.status(200).send(result)
    } else {
       res.status(404).send("Not found")
    }
 
 });

app.put("/countries/:id", (req: Request, res: Response) =>{
    let errorCode: number = 400
    try{ 
        const countryIndex : number =
        countries.findIndex((country) => 
            country.id === Number(req.params.id)
        )
        if(countryIndex === -1){
            errorCode = 404
            throw new Error()
        }
        if(!req.body.name && !req.body.capital){
            console.log (req.query.name, req.body.capital);
            throw new Error("invalid params")
        }
        if(req.body.name){
            countries[countryIndex].name = req.body.name;
        };
        if(req.query.capital){
            countries[countryIndex].capital = req.body.capital;
        }
        res.status(200).send('Country successfully updated')
    }catch (error) {
        console.log(error)
        res.status(errorCode).send(error.message)
     }
  })

  //criar pais 
  app.post("/countries/create", (req: Request, res: Response) => {
    const id: number = Date.now()
  });




  //apagar pais
  app.delete("/countries/:id", (req: Request, res: Response) => {
    //Faz devolver um erro diferente para cada coisa que a gente fez
    let errorCode: number = 400;
    try {
        const authorization = req.headers.authorization;
        if (!authorization) {
            errorCode = 401;
            throw new Error("Invalid authorization. Please fill the field");
        }

        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw new Error("Invalid id type. Please send a number");
        }

        //buscar pais
        const myCountries = countries;
        const countryIndex = myCountries.findIndex((country) => {
            return country.id === id;
        });
        //se pais não for encontrado
        if (countryIndex < 0) {
            errorCode = 404;
            throw new Error("Country not found");
        }
        //remover pais
        countries.splice(countryIndex, 1);

        res.status(200).send("PAIS APAGADO COM SUCESSO");

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message });
    }

});


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})