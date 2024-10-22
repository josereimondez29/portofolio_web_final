#!/usr/bin/env bash
# Exit on error
set -o errexit

# Modify this line as needed for your package manager (pip, poetry, etc.)
pip install -r requirements.txt

# Convert static asset files
python portofolio_web/manage.py collectstatic --no-input

# Apply any outstanding database migrations
python portofolio_web/manage.py migrate

# Print PYTHONPATH for debugging
echo "PYTHONPATH: $PYTHONPATH"

# Print directory structure for debugging
echo "Directory structure:"
ls -R
