# person-site-accessibility-tests

## Setup

These accessibility tests are run using [pa11y] (https://github.com/pa11y/pa11y),
see the github readme for a detailed rundown of how to get it working but to give
an overview you will need a server with node.js 4+ installed (recommend using nvm
to install it) and you will also need PhantomJS installed.

## Running the Tests

I am running these test as part of a jenkins CI process, I setup a job in jenkins
that runs these test once the website has been built.

## Acknowledgements

Thanks to the guys who built [pa11y] (https://github.com/pa11y/pa11y) for their
awesome tool.
