jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "http://feeds.feedburner.com/TechCrunch/startups",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
        
        }
    );

// Key facts
//    CLIENTS INFO CIRCLE
    var clients_info = new ProgressBar.Circle('#clients', {
        strokeWidth: 8,
        easing: 'easeInOut',
        duration: 1800,
        color: '#66cb8c',
        trailColor: '#eee',
        trailWidth: 1,
        text: {
            // Initial value for text.
            // Default: null
            value: '> 40 clients',
            // Class name for text element.
            // Default: 'progressbar-text'
            className: 'progressbar__label',
            // Inline CSS styles for the text element.
            // If you want to modify all CSS your self, set null to disable
            // all default styles.
            // If the style option contains values, container is automatically
            // set to position: relative. You can disable behavior this with
            // autoStyleContainer: false
            // If you specify anything in this object, none of the default styles
            // apply
            // Default: object speficied below
            style: {
                // Text color.
                // Default: same as stroke color (options.color)
                color: '#778492',
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: 0,
                margin: 0,
                fontsize: 20,
                // You can specify styles which will be browser prefixed
                transform: {
                    prefix: true,
                    value: 'translate(-50%, -50%)'
                }
            },

            // Only effective if the text.style is not null
            // By default position: relative is applied to container if text
            // is set. Setting this to false disables that feature.
            autoStyleContainer: true,

            // Only effective if the shape is SemiCircle.
            // If true, baseline for text is aligned with bottom of
            // the SVG canvas. If false, bottom line of SVG canvas
            // is in the center of text.
            // Default: true
            alignToBottom: true
        },
        svgStyle: null
    });

  //function to display animation after scrolling down to 500px
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            clients_info.animate(1.0);
        }
    });

    //    PROJECTS INFO CIRCLE
    var projects_info = new ProgressBar.Circle('#projects', {
        strokeWidth: 8,
        easing:      'easeInOut',
        duration:    1800,
        color:       '#c28dcb',
        trailColor:  '#eee',
        trailWidth:  1,
        text:        {
            // Initial value for text.
            // Default: null
            value: '> 60 projects',
            // Class name for text element.
            // Default: 'progressbar-text'
            className: 'progressbar__label',
            // Inline CSS styles for the text element.
            // If you want to modify all CSS your self, set null to disable
            // all default styles.
            // If the style option contains values, container is automatically
            // set to position: relative. You can disable behavior this with
            // autoStyleContainer: false
            // If you specify anything in this object, none of the default styles
            // apply
            // Default: object speficied below
            style: {
                // Text color.
                // Default: same as stroke color (options.color)
                color: '#778492',
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: 0,
                margin: 0,
                fontsize: 20,
                // You can specify styles which will be browser prefixed
                transform: {
                    prefix: true,
                    value: 'translate(-50%, -50%)'
                }
            },

            // Only effective if the text.style is not null
            // By default position: relative is applied to container if text
            // is set. Setting this to false disables that feature.
            autoStyleContainer: true,

            // Only effective if the shape is SemiCircle.
            // If true, baseline for text is aligned with bottom of
            // the SVG canvas. If false, bottom line of SVG canvas
            // is in the center of text.
            // Default: true
            alignToBottom: true
        },
        svgStyle: null
    });

    //function to display animation after scrolling down to 500px
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            projects_info.animate(1.0);
        }
    });

    //    HOURS INFO CIRCLE
    var hours_info = new ProgressBar.Circle('#hours', {
        strokeWidth: 8,
        easing:      'easeInOut',
        duration:    1800,
        color:       '#2db0cb',
        trailColor:  '#eee',
        trailWidth:  1,
        text:        {
            // Initial value for text.
            // Default: null
            value: '> 10000 hours',
            // Class name for text element.
            // Default: 'progressbar-text'
            className: 'progressbar__label',
            // Inline CSS styles for the text element.
            // If you want to modify all CSS your self, set null to disable
            // all default styles.
            // If the style option contains values, container is automatically
            // set to position: relative. You can disable behavior this with
            // autoStyleContainer: false
            // If you specify anything in this object, none of the default styles
            // apply
            // Default: object speficied below
            style: {
                // Text color.
                // Default: same as stroke color (options.color)
                color: '#778492',
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: 0,
                margin: 0,
                fontsize: 20,
                // You can specify styles which will be browser prefixed
                transform: {
                    prefix: true,
                    value: 'translate(-50%, -50%)'
                }
            },

            // Only effective if the text.style is not null
            // By default position: relative is applied to container if text
            // is set. Setting this to false disables that feature.
            autoStyleContainer: true,

            // Only effective if the shape is SemiCircle.
            // If true, baseline for text is aligned with bottom of
            // the SVG canvas. If false, bottom line of SVG canvas
            // is in the center of text.
            // Default: true
            alignToBottom: true
        },
        svgStyle: null
    });

    //function to display animation after scrolling down to 500px
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            hours_info.animate(1.0);
        }
    });



    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    // GitHubCalendar("#github-graph", "olroyko");
    
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    // GitHubActivity.feed({ username: "olroyko", selector: "#ghfeed" });


});