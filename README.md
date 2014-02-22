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
install it. If node isn't available for your system, or you
want to install it globally, take a look around
[nodejs.org/dist/](http://nodejs.org/dist/) and try to find
a suitable binary. (The Raspberry Pi requires the ARM version.)

And with everything in place, start the server and add a
directory of media files:

~~~
$ ./bin/superplay --add ~/vids
Adding files from directory /home/me/vids ...... all loaded!
Firing up the superplay HTTP server on port 8000
~~~

Now simply point your web browser to `http://192.168.2.x:8000`
(or wherever the pi is on your local network), find a
movie title, and click to play :)

As an added convenience, save this page to your phone's home
screen and run it like a native application. On the iPhone,
click the share button within the browser, then "Add to Home Screen".

The `superplay` server is a bit noisy for testing purposes.
If it's running as a background job, you may want to redirect the output:

~~~
$ ./bin/superplay &> /dev/null &
~~~
