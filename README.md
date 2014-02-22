## Media Server with Raspberry Pi  (only using javaScript for server & client) 

*superplay* is a web-based remote control for a media
server. Simply put, use your phone and the Raspberry Pi to
play videos.


## Install

Currently, *superplay* has been tested with the
[Raspberry Pi](http://www.raspberrypi.org/) on the
*Raspbian* image. It runs on [Node.js](http://nodejs.org)
and uses *omxplayer* to display videos.

The first step is to log in to your Raspberry Pi and
download the *superplay* source code:

~~~
$ wget https://github.com/jalalhejazi/superplay/archive/master.zip
$ unzip master.zip
$ cd superplay-master
~~~

Or, using *git*:

			
~~~
SSH  $ git clone git@github.com:Jalalhejazi/superplay.git
HTTP $ git clone https://github.com/jalalhejazi/superplay.git
	 $ cd superplay
~~~

Now that you have it, take a look at the command-line options:

~~~
$ ./bin/superplay -h
~~~

This will check your system for the Node.js runtime and, if
it's not available, automatically prompt you to download and
install nodejs (The Raspberry Pi requires the ARM version)



If node isn't available for your system, or you
want to install it globally, take a look around
[nodejs.org/dist/](http://nodejs.org/dist/) and try to find
a suitable binary. 
This build takes forever (unless you go to sleep after make install)

~~~
wget http://nodejs.org/dist/v0.10.26/node-v0.10.26.tar.gz
tar -zxf node-v0.10.26.tar.gz
cd node-v0.10.26
./configure
make
sudo make install
~~~



And with everything in place, start the server and add a
directory of media files:

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
screen and run it like a native application. On the iPhone,
click the share button within the browser, then "Add to Home Screen".

If it's running as a background job, you may want to redirect the output:

~~~
$ ./bin/superplay &> /dev/null &
~~~
