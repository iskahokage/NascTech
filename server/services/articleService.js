const db = require("../db/db");

class ArticleService {
    static create = async (heading, content) => {
        return await db("articles")
            .insert({
                heading: heading,
                content: content,
            })
            .returning("*");
    };
    static getAll = async () => {
        return await db("articles").select("*").returning("*");
    };

    static getOne = async (id) => {
        return await db("articles").where("id", id).returning("*");
    };
    static delete = async (id) => {
        return await db("articles").where("id", id).del();
    };
    static update = async (id, heading, content) => {
        return await db("articles")
            .where("id", id)
            .update({
                heading: `${heading}`,
                content: `${content}`,
                updated_at: new Date(),
            })
            .returning("*");
    };
}
module.exports = ArticleService;
