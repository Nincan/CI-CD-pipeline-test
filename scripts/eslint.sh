#!/bin/bash

STAGED_FILES=`git diff --diff-filter=ACMTUXB --name-only --staged | egrep "\.[jt]s(x?)$"`

if [ -z "$STAGED_FILES" ] 
then
    printf "No files has changed\n"
else 
    printf "Running ESLint for\n\n$STAGED_FILES\n\n"
    eslint ${STAGED_FILES} "$@"

    if [ $? -ne 0 ]; then
        exit -1
    fi
fi
