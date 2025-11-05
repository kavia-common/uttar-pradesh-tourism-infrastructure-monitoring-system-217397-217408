#!/bin/bash
cd /home/kavia/workspace/code-generation/uttar-pradesh-tourism-infrastructure-monitoring-system-217397-217408/project_frontend
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

