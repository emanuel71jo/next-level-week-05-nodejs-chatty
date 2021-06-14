import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
  async create(req: Request, res: Response): Promise<Response> {
    const { admin_id, user_id, text } = req.body;

    const messageService = new MessagesService();

    const message = messageService.create({
      admin_id,
      user_id,
      text,
    });

    return res.json(message);
  }

  async showByUser(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.params;

    const messageService = new MessagesService();

    const list = messageService.listByUser(user_id);

    return res.json(list);
  }
}

export { MessagesController };
