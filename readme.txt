The Opimizely client lives in a provider called global.ts.

This way, we can include it in all relevant components and see what variations / features the user should be in.


Global.ts also houses the User ID that is passed to Optimizely.

To view Variation 1, use 'user_1'.  To view Variation 2, use 'user_2'


The Homepage will render different content based on the returned variation.  We are saving the variation, and using that variable in a number of ways to render dynamic content.

The About" page will also show you message with the variation you are in.

Additionally, if you click the button below the message, it will send an Event back to Optimizely.
