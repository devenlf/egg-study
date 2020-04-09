'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '戴丽是个小瓜皮';
  }
}

module.exports = HomeController;
