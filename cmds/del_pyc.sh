#! /bin/bash

oldloc=$(pwd)
loc=$(find ../. -type d -name "__pycache__")
if [[ "$?" -eq "0" ]]; then
    rm "${loc}*.pyc"
fi

exit 0