const ArticleService = require("../services/articleService");

class ArticeController {
    static create = async (req, res, next) => {
        try {
            const { heading, content } = req.body;
            const article = await ArticleService.create(heading, content);
            return res.json(article);
        } catch (error) {
            next(error);
        }
    };
    static getAll = async (req, res, next) => {
        try {
            const articles = await ArticleService.getAll()
            return res.json(articles)
        } catch (error) {
            next(error)
        }
    };
    static getOne = async (req,res,next) =>{
        try {
            const {id} = req.params;
            const article = await ArticleService.getOne(id)
            return res.json(article)
        } catch (error) {
            next(error)
        }
    }
    static delete = async (req,res,next) =>{
        try {
            const {id} = req.params;
            const article = await ArticleService.delete(id)
            return res.json({msg: 'Article deleted'})
        } catch (error) {
            next(error)
        }
    }
    static update = async (req,res,next) =>{
        try {
            const {id} = req.params;
            const {heading, content} = req.body
            const article = await ArticleService.update(id, heading, content)
            return res.json(article)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ArticeController;
