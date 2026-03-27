import express from 'express'
import { CreateBookController } from './CreateBookController'

export class ApiServer {
    public static async run(port: number, controller: CreateBookController): Promise<void> {
        const app = express()
        app.use(express.json())

        app.post("/books", (req, res) => controller.handle(req, res))
        
        app.listen(port, () => {
            console.log('server is running')
            while(true)
                console.log("Hello")
        })
    }
}