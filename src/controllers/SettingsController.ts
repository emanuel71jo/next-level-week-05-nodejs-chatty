import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async create(req: Request, res: Response): Promise<Response> {
    const { chat, username } = req.body;

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.create({ chat, username });

      return res.json(settings);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async findByUsername(req: Request, res: Response): Promise<Response> {
    const { username } = req.params;

    const settingsService = new SettingsService();

    const setting = await settingsService.findByUsername(username);

    return res.json(setting);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { username } = req.params;
    const { chat } = req.body;

    const settingsService = new SettingsService();

    await settingsService.update(chat, username);

    return res.json();
  }
}

export { SettingsController };
