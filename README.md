# vue-sodium

## What is it

Libsodium is a portable, cross-compilable, installable, packageable, API-compatible version of NaCl that was started in 2008 (Stable: 2011)
sodium-native is a library that contains low-level bindings to C code.
Github: https://github.com/sodium-friends/sodium-native

sodium-plus is a javascript wrapper for sodium-native. However because of its async nature, it does not play well with Vue.use 
Github: https://github.com/paragonie/sodium-plus

vue-sodium is a wrapper for sodium-plus that makes it globally available in a vuejs app  
Github: https://github.com/LittleWhiteLoti/vue-sodium

## How to use

```
import SodiumPlus from 'sodium-plus'
import VueSodium from '@littlewhiteloti/vue-sodium'

let app = createApp(App)
Promise.resolve(SodiumPlus.auto())
    .then(sodium => {
        app.use(VueSodium, sodium)
        app.mount('#app')
    })

```
 
## Recommendation

For better performance use with the npm package
sodium-native. If that is not found then it will fallback to
ibsodium-wrapper.

## Licensing

Copyright (c) 2021: littlewhiteloti

Version: 0.0.1

License: MIT

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
