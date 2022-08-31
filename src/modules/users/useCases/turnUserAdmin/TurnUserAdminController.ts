import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

interface IRequest {
  user_id: string;
}

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const data: IRequest = {
        user_id: request.params.user_id,
      };

      const result = this.turnUserAdminUseCase.execute(data);

      return response.status(201).json(result);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
