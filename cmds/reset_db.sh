#! /bin/bash

# This is untested so be careful when running it

echo "Are you sure you want to reset the database?"
read confirmation
if [[ $confirmation == "y" ]]; then
    ./del_pyc.sh
    fileloc=$(find ../. -type f -name "db.sqlite3")
    if [[ "$?" -eq "0" ]]; then
        rm "$fileloc"
    fi
fi
exit 0