#!/bin/bash

# Ensure a problem name is provided
if [ -z "$1" ]; then
    echo "❌ Error: Please provide a problem name."
    echo "Usage: ./new-problem.sh fetch-with-retry"
    exit 1
fi

# Convert input name to proper format
PROBLEM_NAME=$(echo "$1" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')
PROBLEM_FILE="problems/${PROBLEM_NAME}.js"

# Check if the file already exists
if [ -f "$PROBLEM_FILE" ]; then
    echo "❌ Error: Problem file already exists!"
    exit 1
fi

# Copy the template to the new problem file
cp problem-template.js "$PROBLEM_FILE"

# Replace placeholders in the new problem file
sed -i '' "s/\[Problem Title\]/$(echo "$1" | sed 's/-/ /g')/g" "$PROBLEM_FILE"
sed -i '' "s/\[Easy\/Medium\/Hard\]/Easy/g" "$PROBLEM_FILE"
sed -i '' "s/\[Topic\]/General Algorithms/g" "$PROBLEM_FILE"
sed -i '' "s/\[Write a clear description of the problem.\]/TODO: Add problem description/g" "$PROBLEM_FILE"

# Open the new file in VS Code
code "$PROBLEM_FILE"

echo "✅ New problem created: $PROBLEM_FILE"
