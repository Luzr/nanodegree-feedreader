/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have valid urls that arent empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                var feedUrl = allFeeds[i].url;
                var lengthUrl = allFeeds[i].url.length;

                expect(feedUrl).toBeDefined();
                expect(lengthUrl).toBeGreaterThan(0);
            };
        });

        it('doesnt have empty names', function() {
            for (var i = -0; i < allFeeds.length; i++) {
                var feedName = allFeeds[i].url;
                var lengthName = allFeeds[i].url.length;

                expect(feedName).toBeDefined();
                expect(lengthName).toBeGreaterThan(0);
            };
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('is hidden by default', function() {
            var body = document.body;

            expect(body.classList).toContain('menu-hidden');
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('changes visibility when the menu icon is clicked', function() {
            var $body = $('body')[0];
            var $menu = $('.menu-icon-link')[0];

            $menu.click();
            expect($body.className).toEqual('');
            $menu.click();
            expect($body.className).toEqual('menu-hidden');
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Inital Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done)
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        it('completed its work, there is at least a single .entry element within the .feed container', function(done) {
            var entryElement = document.getElementsByClassName('entry');
            var entryElementLength = entryElement.length;

            expect(entryElementLength).toBeGreaterThan(0);
            done();
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        var oldFeedContent;
        var loadedFeedContent;

        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeedContent = $('.feed').html();
                loadFeed(1, function() {
                    loadedFeedContent = $('.feed').html();
                    done();
                });
            });
        });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        it('is loaded by the loadFeed function - content actually changed', function() {
            expect(oldFeedContent).not.toBe(loadedFeedContent);
        });
    });

}());