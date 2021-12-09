import { response } from "express";
import fetch from "node-fetch";

class Default {

  async home(req, res) {
    res.json({ message: "HomePage" });
  }

  async get(req, res) {
    var params = Object.entries(req.query)
      .map(function (k) {
        return `${k}`;
      })
      .join("&")
      .replaceAll(",", "=");

    let link = `${req.params.urlToShorten}?${params}`;

    const response = await fetch(`${link}`).catch((error) => {
      res.json(error);
    });

    res.json(await response.json());
  }

  async post(req, res) {
    let link = `${req.params.urlToShorten}`;

    const response = await fetch(`${link}`, {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: { "Content-Type": "application/json" },
    });
    res.json(await response.json());
  }

  async put(req, res) {
    let link = `${req.params.urlToShorten}`;

    const response = await fetch(`${link}`, {
      method: "PUT",
      body: JSON.stringify(req.body),
      headers: { "Content-Type": "application/json" },
    });

    res.json(await response.json());
  }
}

export { Default };
