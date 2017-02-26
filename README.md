# hydaelyn

## About
😷

## Features
😷

## Getting started

### Node 7.6 is required to run this bot. ###
If you're going to be developing a lot in node, [nvm](https://github.com/creationix/nvm) or [n](https://github.com/tj/n) is recommended since they make working with different versions of node so much easier. 
Quick install of latest node for Ubuntu:
```sh
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```

First, clone the repo.
```sh
git clone https://github.com/gloss-water/hydaelyn.git yourfolder
```
Next, install all dependencies via npm.
```sh
npm install
```
Update 'auth.json' to reflect the correct information.
You will need a client_secret file from google sheets placed in the working directory (i.e. next to hydaelyn.js).

Run the bot.
```sh
node hydaelyn.js
```
If you really want to run the bot without node 7.6, you can run (node 7.0 and above) by using --harmony and it should probably work.
```sh
node --harmony hydaelyn.js
```

The first time you run the bot, google will require you to do additional authentication, it should look like this in your console:
```sh
Authorize this app by visiting this url: (long url)
Enter the code from that page here: _
```

Visit the long url, get the code, paste it into your console, and you should be good to go.
