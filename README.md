# personal-site-accessibility-tests

## Setup

These accessibility tests are run using [pa11y] (https://github.com/pa11y/pa11y),
see the github readme for a detailed rundown of how to get it working, but to give an overview you will need a server with node.js 4+ installed (recommend using nvm to install it) and you will also need PhantomJS installed. It will also need to be able to access the urls that you wish to test of course =)

## Running the Tests

I am running these test as part of a jenkins CI process, I setup a job in jenkins  that pulls down this repo into it's workspace. It then installs all of the dependencies using npm: `npm install async pa11y`. The job then runs the javascript test file in this repo using node: `node index.js`. The job will only
fail if any errors are returned by pa11y, any warnings or notices count as a pass.

## Acknowledgements

Thanks to the guys who built [pa11y] (https://github.com/pa11y/pa11y) for their
awesome tool.
