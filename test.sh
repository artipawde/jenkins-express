#!/bin/bash

# not interested in the output

pm2 describe server > /dev/null

# get the exit status
RUNNING=$?
echo "running :${RUNNING}"
#if running == 1 server is not running .. start;

if [ "${RUNNING}" -ne 0 ]; 

then
# start the server

echo "running :${RUNNING}"
echo "Starting The server"
pm2 start server.js

else

#if running == 0 server is running .. restart;

#restart the server
echo "restarting The server"
pm2 restart server.js

fi
