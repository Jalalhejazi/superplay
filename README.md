## Media Server with Raspberry Pi  (only using javaScript for server & client) 

*superplay* is a HTML5 WebApp remote control for a media
server. Simply put, use any mobile-device and let the Raspberry Pi to
play videos on your TV. (like apple TV)


###

Currently, *superplay* has been tested with the
[Raspberry Pi](http://www.raspberrypi.org/) on the
*Raspbian* image. 

You can install node in 2 ways:

1: Install node the easy way (takes 2 minutes)

2: Install node the hard way (takes 2 hours)


## 1: Install node the easy way

The first step is to log in to your Raspberry Pi and
download the *superplay* source code:

~~~
$ wget https://github.com/jalalhejazi/superplay/archive/master.zip
$ unzip master.zip
$ cd superplay-master
~~~

Or, using *git* (only if you need to code with me :-)
			
~~~
SSH  $ git clone git@github.com:Jalalhejazi/superplay.git
HTTP $ git clone https://github.com/jalalhejazi/superplay.git
	 $ cd superplay
~~~

Now that you have it, take a look at the command-line options:

~~~
$ ./bin/superplay --help
~~~

This will check your system for the Node.js runtime and, if
it's not available, automatically prompt you to download and
install node (The Raspberry Pi requires the ARM version)



## 2: Install node the hard way

If node isn't available for your system, or you
want to install it globally, take a look around
[nodejs.org/dist/](http://nodejs.org/dist/) and try to find
a suitable binary. 
This build takes forever (unless you go to sleep after make install)

save all these commands as shell script file
here is a link <a href="install-node.sh">install-node.sh</a>

~~~
wget http://nodejs.org/dist/v0.10.26/node-v0.10.26.tar.gz
tar -zxf node-v0.10.26.tar.gz
cd node-v0.10.26
./configure
make
sudo make install
~~~

secure copy your install-node.sh to your pi home directory: 

~~~
$ scp install-node.sh pi@192.168.1.x: 
~~~

then start the compile+build+installation process 

~~~
pi@raspberrypi ~ $     sudo sh install-node.sh

This build takes forever ( 2 hours or more)
I use "screen -r" to monitor the progress 
~~~

### how to validate if your node installation is working


~~~
nodejs --version
node   --version
npm    --version 
~~~


### after installation play some videos :-) 

And with everything in place, 
start the server and add a directory of media files:

~~~

$ ./bin/superplay --add ~/mp4
Adding files from directory /home/pi/mp4 ...... all loaded!
Firing up the superplay HTTP server on port 8000


$ ./bin/superplay --add ~/mp4 --port 1234
Adding files from directory /home/pi/mp4 ...... all loaded!
Firing up the superplay HTTP server on port 1234

~~~

Now simply point your web browser to `http://192.168.1.x:1234`
(or wherever the pi is on your local network), find a
movie title, and click to play :)

As an added convenience, save this page to your phone's home
screen and run it like a native application. 
On the iPhone or any mobile device click the share button within the browser, then "Add to Home Screen".


If it's running as a background job, you may want to redirect the output:

~~~
$ ./bin/superplay &> /dev/null &
~~~

I hope you enjoy playing around as much I enjoyed hacking my pi 

@JalalHejazi

