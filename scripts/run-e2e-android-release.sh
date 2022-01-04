#!/bin/bash

yarn start &

METRO_BUNDLER_PID=$!

yarn e2e:android

DETOX_EXIT_CODE=$?

kill $METRO_BUNDLER_PID

exit $DETOX_EXIT_CODE