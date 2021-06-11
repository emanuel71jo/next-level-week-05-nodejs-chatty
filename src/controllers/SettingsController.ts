import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;

    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({ chat, username });

    settingsRepository.save(settings);

    return res.json(settings);
  }
}

export { SettingsController };
