import { CreateBookUseCase } from "src/app/CreateBookUseCase";
import { Request, Response } from "express";

export class CreateBookController{
    public constructor(private readonly _useCase: CreateBookUseCase) {

    }

    public async handle(req: Request, res: Response): Promise<void> {
        const userId = "userIdFake"

        const response = this._useCase.execute({
            name: req.body,
            userId: userId
        })

        res.status(201).json({id: (await response).bookId})
    }
}