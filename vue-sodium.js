/**
 * Copyright 2021 LittleWhiteLoti <little.white.loti@gmail.com>
 * Version: 0.1.0
 * License: MIT
 * A ported version of sodium-plus to vuejs to work as a global plugin or 
 * a component scoped plugin. The reason this needed to be ported to vuejs
 * was because the async method auto() does not work with the sync method 
 * vue.use() therefore the libsodium library would not load before it was
 * being used.
 * 
 * Recommendation: For better performance use with the npm package
 * sodium-native. If that is not found then it will fallback to
 * ibsodium-wrapper.  
*/

export default {
    install: function(app) {
        console.log("Vue Sodium Plugin Initiated");
    }
}