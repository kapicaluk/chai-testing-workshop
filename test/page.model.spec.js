const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-spies'));
const models = require('../models')
const supertest = require('supertest')
const Page = models.Page

describe('Page model', function() {

    describe('Virtuals', function() {
        let page;
        beforeEach(function() {
            page = Page.build({urlTitle: 'superpage'});
             
        })
        describe('route', function() {
            it('returns the url_name prepended by "/wiki/"', function() {
                expect(page.route).to.equal('/wiki/superpage')
            });
        });
        describe('renderedContent', function() {
            it('converts the markdown-formatted content into HTML', function() {

            });
        });


    });

    describe('Class methods', function() {
        describe('findByTag', function() {
            it('gets pages with the search tag');
            it('does not get pages without the search tag');
        });
    });

    describe('Instance methods', function() {
        describe('findSimilar', function() {
            it('never gets itself');
            it('gets other pages with any common tags');
            it('does not get other pages without any common tags');
        });
    });

    describe('Validations', function() {
        it('errors without title');
        it('errors without content');
        it('errors given an invalid status');
    });

    describe('Hooks', function() {
        it('it sets urlTitle based on title before validating');
    });

});