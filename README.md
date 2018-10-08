# slack-nowplaying-lastfm-gas

Google Apps Script which post nowplaying track on [last.fm](https://www.last.fm/) to your slack status.


## Usage
1. Open [Google Apps Script](http://script.google.com/).
2. Create an empty project.
3. Replace `Code.js` with contents of the `slack-nowplaying-lastfm-gas.js`.
4. Edit configurations of Script Propeties. Go to **File** > **Project Propeties** and selecting the **Script Propeties** tab. Add new line, then set each of property and the corresponding value.
5. For automatically executing, create a trigger (e.g. one per 5 mins).

## How to obtain Slack API Token
Please see [Create and regenerate API tokens](https://get.slack.help/hc/en-us/articles/215770388-Create-and-regenerate-API-tokens).

## How to obtain last.fm API key
You can get from [this page](http://www.last.fm/api/account/create) on last.fm,

## Licence

The MIT License.

Copyright (c) 2018 chick-p

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
