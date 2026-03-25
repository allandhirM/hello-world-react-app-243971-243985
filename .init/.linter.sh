#!/bin/bash
cd /tmp/kavia/workspace/code-generation/hello-world-react-app-243971-243985/frontend_react_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

