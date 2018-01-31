/* $() function to ensure that tests do not run until the DOM is ready */
$(function () {

    /* Test suite for the RSS feeds definitions */

    describe('RSS Feeds', function () {

        /* Ensure that the allFeed variable is defined and is
        not empty */

        it('allFeeds are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loops through each feed in the allFeeds object and
        ensure it has a URL defined, and that the URL is not empty. */

        it('allFeeds URL is defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeTruthy();
            });
        });


        /* Loops through each feed in the allFeeds object and
        ensures it has a name defined, and that the name is not empty. */

        it('allFeeds name is defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* Test suite for the slide out menu */

    describe('The menu', function () {


        /* Ensures the menu element is hidden by default. */

        it('menu element hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        /* Ensures the menu changes visibility when the menu icon
        is clicked (toggled). */

        it('menu element transitions when clicked', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    /* Test suite for the Initial Entries */

    describe('Initial Entries', function () {


        /* Ensures when the asynchronous loadFeed function is called and completes
        its work, and there is at least a single .entry element within
        the .feed container. */

        beforeEach(function (done) {
            loadFeed(0, done);
        });


        it('at least 1 single .entry element in .feed container',
            function (done) {
            expect($('.feed .entry').length).not.toBe(0);
            done();
        });
    });

    /* Test suite for the New Feed Selection */

    describe('New Feed Selection', function () {
        var feedContent;


        /* Ensures when a new feed is loaded by the asynchronous loadFeed
        function that the content changes. */

        beforeEach(function (done) {
            loadFeed(1, function () {
                feedContent = $('.feed').html();
                done();
            });
        });


        it('ensures a new feed call loads changed content', function (
            done) {
            loadFeed(2, function () {
                expect(feedContent).not.toEqual($('.feed').html());
                done();
            });

        });

    });

}());