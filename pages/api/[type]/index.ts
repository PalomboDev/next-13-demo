import type { NextApiRequest, NextApiResponse } from "next";

import { ErrorResponse } from "@lib/types";

export default function handler<T>(req: NextApiRequest, res: NextApiResponse<T[] | ErrorResponse>): void {
    const { type } = req.query;

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(data => data.json())
        .then(data => {
            if (data != null) {
                res.status(200).json(data);
            } else {
                res.status(500).json({
                    error: data,
                    code: 500
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                error: error.message,
                code: 500
            });
        });
}