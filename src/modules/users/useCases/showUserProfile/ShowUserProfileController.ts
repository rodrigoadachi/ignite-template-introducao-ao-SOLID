import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

interface IRequest {
  user_id: string;
}

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const data: IRequest = {
        user_id: request.params.user_id,
      };

      const result = this.showUserProfileUseCase.execute(data);

      return response.status(201).json(result);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { ShowUserProfileController };
