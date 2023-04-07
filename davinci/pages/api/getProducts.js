
const { Client } = require('@notionhq/client');

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res
            .status(405)
            .json({ message: `${req.method} requests are not allowed` });
    }
    try {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
        });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ msg: 'There was an error' });
    }
}