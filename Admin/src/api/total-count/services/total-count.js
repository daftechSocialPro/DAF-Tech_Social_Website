'use strict';

/**
 * total-count service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::total-count.total-count');
